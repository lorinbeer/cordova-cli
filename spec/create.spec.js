/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

var clicreate = require("../src/create.js"),
    Q = require('q'),
    cordova_lib = require('cordova-lib'),
    plugman = cordova_lib.plugman,
    cordova = cordova_lib.cordova;

describe("cordova cli", function () {
    beforeEach(function () {
        // Event registration is currently process-global. Since all jasmine
        // tests in a directory run in a single process (and in parallel),
        // logging events registered as a result of the "--verbose" flag in
        // CLI testing below would cause lots of logging messages printed out by other specs.
        spyOn(cordova, "on");
        spyOn(plugman, "on");
    });

    describe("Create Module", function () {

        describe("parseConfig", function() { 

            it("should be defined", function () {
                expect(clicreate.parseConfig).toEqual(jasmine.any(Function));    
            });

            it("should return an empty object if the argument resolves to false", function () {
               expect(clicreate.parseConfig()).toEqual({}); 
               expect(clicreate.parseConfig(false)).toEqual({}); 
               expect(clicreate.parseConfig(undefined)).toEqual({}); 
            });

            it("should print an error message on unparseable string (invalid json)", function () {
                // fail string
                var cannot = '{boris":"I can break her codes!}';
   
                clicreate.parseConfig(cannot);
            });

            it("should return an object on parseable json", function () {
                var can = '{"boris":"I Am Invincible!!"}',   // success string
                    obj = {boris:"I am Invincible!!"};       // matching object 

                expect(clicreate.parseConfig(can)).toEqual(obj);
            });


        });

        describe("create", function() { 

            it("should be defined", function () {
                expect(clicreate.create).toEqual(jasmine.any(Function));    
            });

        });
    });
});
