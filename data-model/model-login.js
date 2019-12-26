import { get, post } from '../utils/http';
import {
    API_DECODE_BIND
} from '../common/constants';

exports.getDecodeAndBind = (encryptedData, iv) => {
    return get(API_DECODE_BIND, {'data': encryptedData, 'iv': iv});
};
