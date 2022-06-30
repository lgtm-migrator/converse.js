import { html } from 'lit';
import { __ } from 'i18n';
import { JINGLE_CALL_STATUS } from '../constants';

const tpl_active_call = (o) => {
    const button = __('Call Inititated');
    return html`
        <div>
            <span><a class="button-color" @click=${ o.endCall }>${ button }</a></span>
        </div>
    `;
}

    // ${(jingle_status === JINGLE_CALL_STATUS.ACTIVE) ? html`${tpl_active_call(el)}` : html`` }
export default (el) => {
    const jingle_status = el.model.get('jingle_status');
    return html`
        <div>
            ${(jingle_status === JINGLE_CALL_STATUS.PENDING) ? html`Calling...` : '' }
        </div>
        <div>
            ${(jingle_status === JINGLE_CALL_STATUS.PENDING) ? tpl_active_call(el) : '' }
            ${(jingle_status === JINGLE_CALL_STATUS.ENDED) ? html`Call Ended` :  '' }
        </div>
    `;
}