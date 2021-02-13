/*
 * 媒体查询
 * 级别: maxDesktop,desktop tablet phone minPhone
 * 状态:
 * 限定分辨率显不显示，*b,显示 *n,隐藏
 * 继承显不显示，*ba，自己和以下显示，*na, 自己和以下隐藏
 * */
export const media = ({mb, mba, mn, mna, db, dba, dna, dn, tb, tba, tn, tna, pb, pn, pba, pna, mpb, mpn}) => {
    let css;
    if (mb && typeof mb === 'boolean') {
        //仅在大桌面显示
        css = `@media only screen and (max-width: 1199px) {display:none;}`;
    }

    if (mn && typeof mn === 'boolean') {
        //仅在大桌面隐藏
        css = `@media only screen and (min-width:1200px)  {display:none;}`;
    }

    if (mba && typeof mba === 'boolean') {
        //全显示
        css = `{display:block;}`;
    }

    if (mna && typeof mna === 'boolean') {
        //全隐藏
        css = `{display:none;}`;
    }

    //992 ~ 1199
    if (db && typeof db === 'boolean') {
        //仅在桌面显示
        css = `@media only screen and (max-width:991px) {display:none;}  @media only screen and (min-width: 1200px) {display:none;}`;
    }

    if (dn && typeof dn === 'boolean') {
        //仅在桌面隐藏
        css = `@media screen and (min-width:992px) and (max-width:1199px) {display:none;}`;
    }

    if (dba && typeof dba === 'boolean') {
        //仅在桌面及以下分辨率显示
        css = `@media only screen and (min-width:1200px)  {display:none;}`;
    }

    if (dna && typeof dna === 'boolean') {
        //仅在桌面及以下分辨率隐藏
        css = `@media only screen and (max-width: 1199px) {display:none;}`;
    }

    //768 ~ 991 平板
    if (tb && typeof tb === 'boolean') {
        //仅在平板显示
        css = `@media only screen and (max-width: 767px) {display:none;} @media only screen and (min-width: 992px) {display:none;} `;
    }

    if (tn && typeof tn === 'boolean') {
        //仅在平板隐藏
        css = `@media only screen and (min-width:768px) and (max-width:991px) {display:none;}`;
    }

    if (tba && typeof tba === 'boolean') {
        //在平板及以下分辨率显示
        css = `@media only screen and (min-width: 992px)  {display:none;}`;
    }

    if (tna && typeof tna === 'boolean') {
        //在平板及以下分辨率隐藏
        css = `@media only screen and (max-width:991px)  {display:none;}`;
    }

    //375 ~ 767 手机
    if (pb && typeof pb === 'boolean') {
        //仅在大屏幕手机显示
        css = `@media only screen and (max-width: 374px) {display:none;} @media only screen and (min-width: 768px) {display:none;} `;
    }

    if (pn && typeof pn === 'boolean') {
        //仅在大屏幕手机隐藏
        css = `@media only screen and (min-width:375px) and (max-width:767px) {display:none;}`;
    }

    if (pba && typeof pba === 'boolean') {
        //在大屏幕手机及以下分辨率显示
        css = `@media only screen and (min-width: 768px)  {display:none;}`;
    }

    if (pna && typeof pna === 'boolean') {
        //在大屏幕手机及以下分辨率隐藏
        css = `@media only screen and (max-width:767px)  {display:none;}`;
    }

    //0 ~ 374
    if (mpb && typeof mpb === 'boolean') {
        //仅在小屏幕手机显示
        css = `@media only screen and (min-width: 375px) {display:none;}`;
    }
    if (mpn && typeof mpn === 'boolean') {
        //仅在小屏幕手机隐藏
        css = `@media only screen and (max-width: 374px) {display:none;}`;
    }

    return css;
};
