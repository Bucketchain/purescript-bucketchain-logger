'use strict';

export function _remoteAddress(req) {
  return req.socket.remoteAddress;
}
