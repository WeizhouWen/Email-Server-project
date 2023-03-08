import axios from "axios";
import { message } from 'antd';

axios.defaults.withCredentials = true;

const baseUrl = 'http://192.168.64.16:8080';

const getData = async (axiosParams: any, showTip = true) => {
  try {
    const { data } = await axios({
      ...axiosParams,
      url: `${baseUrl}${axiosParams.url}`,
    });

    if(!data.success) {
      if(showTip) {
        message.error(data.message);
      }
      return {
        error: data.message
      };
    } else {
      return {
        data: data.data
      }
    }
  } catch (e: any) {
    if(showTip) {
      message.error(e.message);
    }
    return {
      error: e.message
    };
  }
}

export const userLogin = async (params: any) => {
  return getData({
    method: 'POST',
    url: `/user/login`,
    data: params
  })
}

export const userSignup = async (params: any) => {
  return getData({
    method: 'POST',
    url: `/user/signup`,
    data: params
  })
}

export const getMailList = async (params: any) => {
  return getData({
    url: `/mail/list`,
    params,
  })
}

export const readMail = async (params: any) => {
  return getData({
    method: 'POST',
    url: `/mail/read`,
    data: params
  })
}

export const deleteMail = async (params: any) => {
  return getData({
    method: 'POST',
    url: `/mail/delete`,
    data: params
  })
}

export const sendMail = async (params: any) => {
  return getData({
    method: 'POST',
    url: `/mail/send`,
    data: params
  })
}

export const draftMail = async (params: any) => {
  return getData({
    method: 'POST',
    url: `/mail/draft`,
    data: params
  })
}
