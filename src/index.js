'use strict';
import visible from './assertions/visible';
import count from './assertions/count';
import text from './assertions/text';
import immediately from './chains/immediately';

export default function (client) {
    return function chaiWebdriverIO(chai, utils) {
        visible(client, chai, utils);
        count(client, chai, utils);
        text(client, chai, utils);
        immediately(client, chai, utils);
    };
}
