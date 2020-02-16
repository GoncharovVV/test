import updatePartnerKey from './PartnerKey';
import updateDetailsAuth from './DetailsAuth';
import updateECommercePlatform from './eCommercePlatform';
import updateLoginDetails from './LoginDetails';
const reducer = (state: any, action: any) => ({
  partnerKey: updatePartnerKey(state, action),
  detailsAuth: updateDetailsAuth(state, action),
  eCommercePlatform: updateECommercePlatform(state, action),
  loginDetails: updateLoginDetails(state, action)
});
export default reducer;
