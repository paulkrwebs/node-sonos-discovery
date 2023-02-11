'use strict';
const soap = require('../../helpers/soap');
const TYPE = soap.TYPE;

function setSurroundMode(mode) {
  const value = mode ? '1' : '0';
  // console.log('player ' + value);
  let result = soap.invoke(
    `${this.baseUrl}/MediaRenderer/RenderingControl/Control`,
    TYPE.SetEQ,
    { eqType: 'SurroundMode', value });
  return result;
};

module.exports = setSurroundMode;
