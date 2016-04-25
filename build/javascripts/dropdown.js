/**
 * Created by vinside on 4/25/16.
 */

function anichange (objName) {
    if ($(objName).css('display') == 'none') {
        $(objName).toggle({height: 'show'});
    } else {
        $(objName).toggle({height: 'hide'});
    }
}
