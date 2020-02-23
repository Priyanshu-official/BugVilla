module.exports = {
  NOT_AUTHORIZED: 401,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  CONFLICT: 409,
  UNPROCESSABLE: 422,
  UNSUPPORTED_MEDIA: 415,
  PAYLOAD_TOO_LARGE: 413,

  BAD_GATEWAY: 502,
  NOT_IMPLEMENTED: 501,
  INTERNAL_ERROR: 500,

  CREATED: 201,
  DELETED: 204,
  NO_CONTENT: 204,
  OK: 200,

  PORT: 5000,
}

module.exports.notify_types = {
  COMMENTED: 'COMMENTED',
  MENTIONED: 'MENTIONED',
  REFERENCED: 'REFERENCED',
  BUG_STATUS: 'BUG_STATUS',
  NEW_BUG: 'NEW_BUG',
}