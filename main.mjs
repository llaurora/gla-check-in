import axios from 'axios';

const CHECK_IN_CODE = 0;
const CHECK_IN_OK = 'CheckIn Ok';
const CHECK_IN_ERROR = 'CheckIn Error';

const checkIn = async () => {
  const cookie = process.env.GLADOS;
  if (!cookie) {
    return;
  }
  try {
    const checkInResponse = await axios('https://glados.one/api/user/checkin', {
      method: 'POST',
      data: {
        token: 'glados.one',
      },
      headers: {
        cookie,
        'Content-type': 'application/json;charset=UTF-8',
      },
    });
    const statusResponse = await axios('https://glados.one/api/user/status', {
      method: 'GET',
      headers: {
        cookie,
        'Content-type': 'application/json, text/plain, */*',
      },
    });
    const {
      data: { code, message: checkInMessage },
    } = checkInResponse;
    const {
      data: {
        data: { leftDays },
      },
    } = statusResponse;
    return `${code === CHECK_IN_CODE ? `${CHECK_IN_OK},` : ''}${checkInMessage},left days ${Number(leftDays)}`;
  } catch (error) {
    return `${CHECK_IN_ERROR},${error.message}`;
  }
};

const main = async () => {
  try {
    const result = await checkIn();
    const token = process.env.NOTIFY;
    if (!token) {
      return;
    }
    // Send notification only when check-in fails
    if (result.startsWith(CHECK_IN_ERROR)) {
      await axios('http://www.pushplus.plus/send', {
        method: 'POST',
        data: {
          token,
          content: `${result},please try to update the cookie!`,
        },
        headers: {
          'Content-type': 'application/json;charset=UTF-8',
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

main();
