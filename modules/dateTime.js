import { DateTime } from './luxon.js';

const currentDateTime = DateTime.now();
const displayDateTime = currentDateTime.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

export default displayDateTime;