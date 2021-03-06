export const ADD_IN_NETWORK_LIST = 'ADD_IN_NETWORK_LIST';
export const UPDATE_NETWORK_RSP_DATA = 'UPDATE_NETWORK_RSP_DATA';
export const CLEAR_NETWORK_LIST = 'CLEAR_NETWORK_LIST';

export function addInNetworkList(networkRequest) {
  return {
    type: ADD_IN_NETWORK_LIST,
    data: networkRequest,
  };
}

export function updateNetworkRspData(id, data) {
  let jsonData;

  try {
    jsonData = JSON.parse(data);
  } catch (e) {
    jsonData = {};
    console.log('updateNetworkRspData JSON.parse catch err', data);
  }

  return {
    type: UPDATE_NETWORK_RSP_DATA,
    data: {
      id,
      jsonData,
    },
  };
}

export function clearNetworkList() {
  return {
    type: CLEAR_NETWORK_LIST,
  };
}
