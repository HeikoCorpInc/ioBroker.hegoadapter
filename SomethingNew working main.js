'use strict';



let adapter;
function startAdapter(options) {
     options = options || {};
     Object.assign(options, {
        name: 'somethingNew',
        ready: function (){
            main()
        }

     });
     adapter = new utils.Adapter(options);

     return adapter;
};




function main() {
}

// If started as allInOne/compact mode => return function to create instance
if (module && module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
