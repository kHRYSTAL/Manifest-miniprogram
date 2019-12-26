import {formIdCollect as collect} from '../data-model/model-form';
export default Behavior({
    methods: {
        collectFormId (evt) {
            var formId = evt.detail.formId;
            if (formId != undefined) {
                collect(formId);
            }
        }
    }
});
