/**
 * Global Variable Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.globals.html
 */
module.exports.globals = {

  /****************************************************************************
  *                                                                           *
  * Expose the lodash installed in Sails core as a global variable. If this   *
  * is disabled, like any other node module you can always run npm install    *
  * lodash --save, then var _ = require('lodash') at the top of any file.     *
  *                                                                           *
  ****************************************************************************/

	// _: true,

  /****************************************************************************
  *                                                                           *
  * Expose the async installed in Sails core as a global variable. If this is *
  * disabled, like any other node module you can always run npm install async *
  * --save, then var async = require('async') at the top of any file.         *
  *                                                                           *
  ****************************************************************************/

	// async: true,

  /****************************************************************************
  *                                                                           *
  * Expose the sails instance representing your app. If this is disabled, you *
  * can still get access via req._sails.                                      *
  *                                                                           *
  ****************************************************************************/

	// sails: true,

  /****************************************************************************
  *                                                                           *
  * Expose each of your app's services as global variables (using their       *
  * "globalId"). E.g. a service defined in api/models/NaturalLanguage.js      *
  * would have a globalId of NaturalLanguage by default. If this is disabled, *
  * you can still access your services via sails.services.*                   *
  *                                                                           *
  ****************************************************************************/

	// services: true,

  /****************************************************************************
  *                                                                           *
  * Expose each of your app's models as global variables (using their         *
  * "globalId"). E.g. a model defined in api/models/User.js would have a      *
  * globalId of User by default. If this is disabled, you can still access    *
  * your models via sails.models.*.                                           *
  *                                                                           *
  ****************************************************************************/

  // models: true
  //Develop
  google_drive: {
    folders:{
      events: "1IVtStvCMHZhC-N7CSsItpLp5KoRvr0da",
      places: "178ThaDqJLnjU78UL8x7oMamO_N6i41lh",
      gallery: "14whwaq1jMhwCzX247qmJPqU58Xql07DC",
      blog: "1mRQLqnrc0tdGeYq03Fwnf8iIB-mBsfUj"
    }
  },
  //Production
  // google_drive: {
  //   folders:{
  //     events: "1h7InbWSAPUL0Cnf5-5lJWv_-scRFdnBD",
  //     places: "1KO8-0m1mdU6NRgkZSdfbZbhcEEgV6xqZ",
  //     gallery: "1z_v7aC4YbHasPp2WZiJ6aLp42HD-n_lR",
  //     blog: "11lzs2zy2ZEscXbgvq0DATxnbTwpfxly3"
  //   }
  // }
};
