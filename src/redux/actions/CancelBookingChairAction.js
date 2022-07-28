import {CANCEL_CHAIR} from "../types/CancelChairType"
const CancelChairAction = (soGhe) => {
    return({
        type: CANCEL_CHAIR,
        soGhe
    });
}

export default CancelChairAction;