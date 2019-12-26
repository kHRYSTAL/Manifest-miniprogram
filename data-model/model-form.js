import {post} from '../utils/http';
import {API_FORMID_COLLECT} from '../common/constants';

exports.formIdCollect = (formId) => {
    return post(API_FORMID_COLLECT, {'formid': formId});
};
