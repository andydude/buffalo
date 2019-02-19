$(function(){
    
    var ALGORITHMS = [
{
    "alg": "R U' R' U",
    "algid": "CV1",
    "htm": 4,
    "notes": "AntiSexy",
    "patid": "Fc",
    "posid": "AaJjBbPd/Fc",
    "qtm": 4,
    "speed": 2.88,
    "stm": 4
},
{
    "alg": "U' R U R'",
    "algid": "CV2",
    "htm": 4,
    "notes": "Sexy",
    "patid": "Ib",
    "posid": "AaCcQjKd/Ib",
    "qtm": 4,
    "speed": 2.88,
    "stm": 4
},
{
    "alg": "U F' U' F",
    "algid": "CV3",
    "htm": 4,
    "notes": "LeftSexy",
    "patid": "Ni",
    "posid": "AaPpFbCd/Ni",
    "qtm": 4,
    "speed": 2.88,
    "stm": 4
},
{
    "alg": "F' U F U'",
    "algid": "CV4",
    "htm": 4,
    "notes": "AntiLeftSexy",
    "patid": "Qm",
    "posid": "AaKcDpMd/Qm",
    "qtm": 4,
    "speed": 2.88,
    "stm": 4
},
{
    "alg": "R' F R F'",
    "algid": "DV1",
    "htm": 4,
    "notes": "Sledge",
    "patid": "Jb",
    "posid": "AaIiPpQd/Jb",
    "qtm": 4,
    "speed": 3.2,
    "stm": 4
},
{
    "alg": "F R' F' R",
    "algid": "DV2",
    "htm": 4,
    "notes": "AntiSledge",
    "patid": "Mi",
    "posid": "AaFjKmNd/Mi",
    "qtm": 4,
    "speed": 3.2,
    "stm": 4
},
{
    "alg": "U' R B' R B R2 U",
    "algid": "EV1",
    "htm": 7,
    "notes": "",
    "patid": "Bc",
    "posid": "AaPpDmMd/Bc",
    "qtm": 8,
    "speed": 5.7,
    "stm": 7
},
{
    "alg": "U F' L F' L' F2 U'",
    "algid": "EV2",
    "htm": 7,
    "notes": "",
    "patid": "Dm",
    "posid": "AaJiBjKd/Dm",
    "qtm": 8,
    "speed": 5.7,
    "stm": 7
},
{
    "alg": "U F2 L F L' F U'",
    "algid": "EV3",
    "htm": 7,
    "notes": "",
    "patid": "Fc",
    "posid": "AaCpQmVd/Fc",
    "qtm": 8,
    "speed": 5.9,
    "stm": 7
},
{
    "alg": "U' R2 B' R' B R' U",
    "algid": "EV4",
    "htm": 7,
    "notes": "",
    "patid": "Qm",
    "posid": "AaViFjCd/Qm",
    "qtm": 8,
    "speed": 5.9,
    "stm": 7
},
{
    "alg": "F' U2 L' U' L F U'",
    "algid": "FV1",
    "htm": 7,
    "notes": "",
    "patid": "Fc",
    "posid": "AaJjBbPd/Fc",
    "qtm": 8,
    "speed": 6.08,
    "stm": 7
},
{
    "alg": "R U' B' R B R2 U",
    "algid": "FV2",
    "htm": 7,
    "notes": "",
    "patid": "Jb",
    "posid": "AaIiPpQd/Jb",
    "qtm": 8,
    "speed": 6.1,
    "stm": 7
},
{
    "alg": "U F' U L' U' L F U'",
    "algid": "FV3",
    "htm": 8,
    "notes": "",
    "patid": "Jb",
    "posid": "AaIiPpQd/Jb",
    "qtm": 8,
    "speed": 6.16,
    "stm": 8
},
{
    "alg": "U F' U' F R U' R' U",
    "algid": "FV4",
    "htm": 8,
    "notes": "",
    "patid": "Jb",
    "posid": "AaIiPpQd/Jb",
    "qtm": 8,
    "speed": 5.76,
    "stm": 8
},
{
    "alg": "U' R B U' B' U R' U",
    "algid": "FV5",
    "htm": 8,
    "notes": "",
    "patid": "Jb",
    "posid": "AaIiPpQd/Jb",
    "qtm": 8,
    "speed": 6.16,
    "stm": 8
},
{
    "alg": "F' U L F' L' F2 U'",
    "algid": "FV6",
    "htm": 7,
    "notes": "",
    "patid": "Mi",
    "posid": "AaFjKmNd/Mi",
    "qtm": 8,
    "speed": 6.1,
    "stm": 7
},
{
    "alg": "U F' L' U L U' F U'",
    "algid": "FV7",
    "htm": 8,
    "notes": "",
    "patid": "Mi",
    "posid": "AaFjKmNd/Mi",
    "qtm": 8,
    "speed": 6.16,
    "stm": 8
},
{
    "alg": "U' R U R' F' U F U'",
    "algid": "FV8",
    "htm": 8,
    "notes": "",
    "patid": "Mi",
    "posid": "AaFjKmNd/Mi",
    "qtm": 8,
    "speed": 5.76,
    "stm": 8
},
{
    "alg": "U' R U' B U B' R' U",
    "algid": "FV9",
    "htm": 8,
    "notes": "",
    "patid": "Mi",
    "posid": "AaFjKmNd/Mi",
    "qtm": 8,
    "speed": 6.16,
    "stm": 8
},
{
    "alg": "R U2 B U B' R' U",
    "algid": "FV10",
    "htm": 7,
    "notes": "",
    "patid": "Qm",
    "posid": "AaKcDpMd/Qm",
    "qtm": 8,
    "speed": 6.08,
    "stm": 7
},
{
    "alg": "F U' B' U F' U' B U",
    "algid": "G1",
    "htm": 8,
    "notes": "Niklas",
    "patid": "Vj",
    "posid": "AaJbFcNd",
    "qtm": 8,
    "speed": 6.24,
    "stm": 8
},
{
    "alg": "R' U L U' R U L' U'",
    "algid": "G2",
    "htm": 8,
    "notes": "Niklas",
    "patid": "Vj",
    "posid": "AaIbQcMd",
    "qtm": 8,
    "speed": 6.24,
    "stm": 8
},
{
    "alg": "B' D B U' B' D' B U",
    "algid": "GV3",
    "htm": 8,
    "notes": "",
    "patid": "Jj",
    "posid": "AaKbBcDd/Jj",
    "qtm": 8,
    "speed": 6.8,
    "stm": 8
},
{
    "alg": "F' U F U' F' U F U'",
    "algid": "GV4",
    "htm": 8,
    "notes": "",
    "patid": "Pi",
    "posid": "AaNpMbId/Pi",
    "qtm": 8,
    "speed": 5.04,
    "stm": 8
},
{
    "alg": "U L' U2 R U R' U2 L U2",
    "algid": "GV5",
    "htm": 9,
    "notes": "",
    "patid": "Jb",
    "posid": "AaBcDjKd/Jb",
    "qtm": 12,
    "speed": 7.04,
    "stm": 9
},
{
    "alg": "U F' U2 B' U F U' B U",
    "algid": "GV6",
    "htm": 9,
    "notes": "",
    "patid": "Ki",
    "posid": "AaIpQbCd/Ki",
    "qtm": 10,
    "speed": 6.96,
    "stm": 9
},
{
    "alg": "U' B U2 F' U' F U2 B' U2",
    "algid": "GV7",
    "htm": 9,
    "notes": "",
    "patid": "Mi",
    "posid": "AaPpBbDd/Mi",
    "qtm": 12,
    "speed": 7.04,
    "stm": 9
},
{
    "alg": "U R U L U' R' U L' U2",
    "algid": "GV8",
    "htm": 9,
    "notes": "",
    "patid": "Mj",
    "posid": "AaKbQcDd/Mj",
    "qtm": 10,
    "speed": 6.96,
    "stm": 9
},
{
    "alg": "U' F' U' B' U F U' B U2",
    "algid": "GV9",
    "htm": 9,
    "notes": "",
    "patid": "Jj",
    "posid": "AaBbFcPd/Jj",
    "qtm": 10,
    "speed": 6.96,
    "stm": 9
},
{
    "alg": "U' B D2 B' U' B D2 B' U2",
    "algid": "GV10",
    "htm": 9,
    "notes": "",
    "patid": "Mj",
    "posid": "AaPbBcDd/Mj",
    "qtm": 12,
    "speed": 9.2,
    "stm": 9
},
{
    "alg": "U' L' D2 L U' L' D2 L U2",
    "algid": "GV11",
    "htm": 9,
    "notes": "",
    "patid": "Jj",
    "posid": "AaKbBcDd/Jj",
    "qtm": 12,
    "speed": 9.2,
    "stm": 9
},
{
    "alg": "U' R U2 L U' R' U L' U'",
    "algid": "GV12",
    "htm": 9,
    "notes": "",
    "patid": "Pb",
    "posid": "AaCcFjNd/Pb",
    "qtm": 10,
    "speed": 6.96,
    "stm": 9
},
{
    "alg": "U2 B U B2 D' R2 D B U",
    "algid": "GV13",
    "htm": 9,
    "notes": "",
    "patid": "Vi",
    "posid": "AaNpJbFd/Vi",
    "qtm": 12,
    "speed": 8.8,
    "stm": 9
},
{
    "alg": "U2 B U' F2 U B' U' F2 U'",
    "algid": "GV14",
    "htm": 9,
    "notes": "",
    "patid": "Cj",
    "posid": "AaBbFcKd/Cj",
    "qtm": 12,
    "speed": 8.12,
    "stm": 9
},
{
    "alg": "U2 B' D B U B' D' B U",
    "algid": "GV15",
    "htm": 9,
    "notes": "",
    "patid": "Jj",
    "posid": "AaBbDcKd/Jj",
    "qtm": 10,
    "speed": 8.0,
    "stm": 9
},
{
    "alg": "U2 B' U R U R' U' B U",
    "algid": "GV16",
    "htm": 9,
    "notes": "",
    "patid": "Jb",
    "posid": "AaBcDjKd/Jb",
    "qtm": 10,
    "speed": 6.72,
    "stm": 9
},
{
    "alg": "U2 F2 U B U' F2 U B' U",
    "algid": "GV17",
    "htm": 9,
    "notes": "",
    "patid": "Jj",
    "posid": "AaVbQcDd/Jj",
    "qtm": 12,
    "speed": 8.12,
    "stm": 9
},
{
    "alg": "U2 L U' F' U' F U L' U'",
    "algid": "GV18",
    "htm": 9,
    "notes": "",
    "patid": "Mi",
    "posid": "AaPpBbDd/Mi",
    "qtm": 10,
    "speed": 6.72,
    "stm": 9
},
{
    "alg": "U2 L D' L' U' L D L' U'",
    "algid": "GV19",
    "htm": 9,
    "notes": "",
    "patid": "Mj",
    "posid": "AaPbBcDd/Mj",
    "qtm": 10,
    "speed": 8.0,
    "stm": 9
},
{
    "alg": "U2 L' U R2 U' L U R2 U",
    "algid": "GV20",
    "htm": 9,
    "notes": "",
    "patid": "Cj",
    "posid": "AaPbQcDd/Cj",
    "qtm": 12,
    "speed": 8.12,
    "stm": 9
},
{
    "alg": "U2 L' U' L2 D F2 D' L' U'",
    "algid": "GV21",
    "htm": 9,
    "notes": "",
    "patid": "Vb",
    "posid": "AaQcMjId/Vb",
    "qtm": 12,
    "speed": 8.8,
    "stm": 9
},
{
    "alg": "F' U F U' R U' R' U",
    "algid": "GV22",
    "htm": 8,
    "notes": "",
    "patid": "Cp",
    "posid": "AaFmKcBd/Cp",
    "qtm": 8,
    "speed": 5.44,
    "stm": 8
},
{
    "alg": "U2 R2 U' L' U R2 U' L U'",
    "algid": "GV23",
    "htm": 9,
    "notes": "",
    "patid": "Mj",
    "posid": "AaBbFcVd/Mj",
    "qtm": 12,
    "speed": 8.12,
    "stm": 9
},
{
    "alg": "R U' R B' R' B R' U",
    "algid": "GV24",
    "htm": 8,
    "notes": "",
    "patid": "Cp",
    "posid": "AaFmKcBd/Cp",
    "qtm": 8,
    "speed": 6.0,
    "stm": 8
},
{
    "alg": "L D' L' U L D L' U'",
    "algid": "GV25",
    "htm": 8,
    "notes": "",
    "patid": "Mj",
    "posid": "AaBbDcPd/Mj",
    "qtm": 8,
    "speed": 6.8,
    "stm": 8
},
{
    "alg": "R U' R' U F' U F U'",
    "algid": "GV26",
    "htm": 8,
    "notes": "",
    "patid": "Cp",
    "posid": "AaDbPiQd/Cp",
    "qtm": 8,
    "speed": 5.44,
    "stm": 8
},
{
    "alg": "R U' R' U R U' R' U",
    "algid": "GV27",
    "htm": 8,
    "notes": "",
    "patid": "Kb",
    "posid": "AaNcJjId/Kb",
    "qtm": 8,
    "speed": 5.04,
    "stm": 8
},
{
    "alg": "U L' D2 L U L' D2 L U2",
    "algid": "GV28",
    "htm": 9,
    "notes": "",
    "patid": "Jj",
    "posid": "AaBbDcKd/Jj",
    "qtm": 12,
    "speed": 9.2,
    "stm": 9
},
{
    "alg": "U B D2 B' U B D2 B' U2",
    "algid": "GV29",
    "htm": 9,
    "notes": "",
    "patid": "Mj",
    "posid": "AaBbDcPd/Mj",
    "qtm": 12,
    "speed": 9.2,
    "stm": 9
},
{
    "alg": "R B R' F R B' R' F'",
    "algid": "H1",
    "htm": 8,
    "notes": "",
    "patid": "Vj",
    "posid": "AaFbBcMd",
    "qtm": 8,
    "speed": 6.8,
    "stm": 8
},
{
    "alg": "F R B R' F' R B' R'",
    "algid": "H2",
    "htm": 8,
    "notes": "",
    "patid": "Vj",
    "posid": "AaCbFcQd",
    "qtm": 8,
    "speed": 6.8,
    "stm": 8
},
{
    "alg": "B L' B' R B L B' R'",
    "algid": "H3",
    "htm": 8,
    "notes": "",
    "patid": "Vj",
    "posid": "AaFbQcCd",
    "qtm": 8,
    "speed": 6.8,
    "stm": 8
},
{
    "alg": "F U F2 L F L2 U L U2",
    "algid": "H4",
    "htm": 9,
    "notes": "",
    "patid": "Vj",
    "posid": "AaQmMiId",
    "qtm": 12,
    "speed": 7.32,
    "stm": 9
},
{
    "alg": "L' B L F' L' B' L F",
    "algid": "H5",
    "htm": 8,
    "notes": "",
    "patid": "Vj",
    "posid": "AaCbFcQd",
    "qtm": 8,
    "speed": 6.8,
    "stm": 8
},
{
    "alg": "F' L' B L F L' B' L",
    "algid": "H6",
    "htm": 8,
    "notes": "",
    "patid": "Vj",
    "posid": "AaFbBcMd",
    "qtm": 8,
    "speed": 6.8,
    "stm": 8
},
{
    "alg": "R' F' L' F R F' L F",
    "algid": "H7",
    "htm": 8,
    "notes": "",
    "patid": "Vj",
    "posid": "AaFbQcCd",
    "qtm": 8,
    "speed": 6.8,
    "stm": 8
},
{
    "alg": "F D B' D' F D B D' F2",
    "algid": "I1",
    "htm": 9,
    "notes": "",
    "patid": "Vj",
    "posid": "AaIbQcMd",
    "qtm": 10,
    "speed": 8.86,
    "stm": 9
},
{
    "alg": "R D L2 D' R D L2 D' R2",
    "algid": "I2",
    "htm": 9,
    "notes": "",
    "patid": "Vj",
    "posid": "AaFbQcCd",
    "qtm": 12,
    "speed": 9.86,
    "stm": 9
},
{
    "alg": "F R2 D R D2 F D F2 R",
    "algid": "I3",
    "htm": 9,
    "notes": "",
    "patid": "Vj",
    "posid": "AaQmMiId",
    "qtm": 12,
    "speed": 9.0,
    "stm": 9
},
{
    "alg": "F U R' U' R F' R' U R U'",
    "algid": "I4",
    "htm": 10,
    "notes": "",
    "patid": "Vj",
    "posid": "AaCbFcQd",
    "qtm": 10,
    "speed": 7.36,
    "stm": 10
},
{
    "alg": "L U2 L D R' F2 R D' L2 U",
    "algid": "I5",
    "htm": 10,
    "notes": "",
    "patid": "Vj",
    "posid": "AaQcFbCd",
    "qtm": 13,
    "speed": 10.6,
    "stm": 10
},
{
    "alg": "U F' U' F2 R' F' R F' U F U'",
    "algid": "IV6",
    "htm": 11,
    "notes": "",
    "patid": "Cc",
    "posid": "AaIjKbQd/Cc",
    "qtm": 12,
    "speed": 7.86,
    "stm": 11
},
{
    "alg": "U2 R U B2 F' D L' D' B2 F R' U'",
    "algid": "JV1",
    "htm": 12,
    "notes": "",
    "patid": "Cc",
    "posid": "AaNmKpDd/Cc",
    "qtm": 15,
    "speed": 12.0,
    "stm": 12
},
        {"algid": "LV2", "patid": "Bj", "alg": "(F' U F U')3", "notes": "AntiLeftSexy3"},
        {"algid": "LV2", "patid": "Bj", "alg": "(U F' U' F)3", "notes": "LeftSexy3"},
        {"algid": "LV2", "patid": "Dj", "alg": "(R U' R' U)3", "notes": "AntiSexy3"},
        {"algid": "LV2", "patid": "Dj", "alg": "(U' R U R')3", "notes": "Sexy3"},
        {"algid": "LV2", "patid": "Cj", "alg": "(R' F R F')3", "notes": "Sledge3"},
        {"algid": "LV2", "patid": "Cj", "alg": "(F R' F' R)3", "notes": "AntiSledge3"},
        {"algid": "HV2", "patid": "K?", "alg": "(R U' R' U)2", "notes": ""},
        {"algid": "HV2", "patid": "K?", "alg": "(R' F R F')2", "notes": ""},
        {"algid": "HV2", "patid": "K?", "alg": "(U F' U' F)2", "notes": ""},
        {"algid": "HV2", "patid": "P?", "alg": "(F R' F' R)2", "notes": ""},
        {"algid": "HV2", "patid": "P?", "alg": "(F' U F U')2", "notes": ""},
        {"algid": "HV2", "patid": "P?", "alg": "(U' R U R')2", "notes": ""},
        //{"algid": "#", "patid": "Fc", "alg": "R U' R' U", "notes": ""},
        //{"algid": "#", "patid": "Ib", "alg": "U' R U R'", "notes": ""},
        //{"algid": "#", "patid": "Jb", "alg": "R' F R F'", "notes": ""},
        //{"algid": "#", "patid": "Mi", "alg": "F R' F' R", "notes": ""},
        //{"algid": "#", "patid": "Ni", "alg": "U F' U' F", "notes": ""},
        //{"algid": "#", "patid": "Qm", "alg": "F' U F U'", "notes": ""},
    ];

    Handlebars.registerHelper('list', function(items, options) {
        var out = ''
        if (!items) {
            return out;
        }
        for(var i = 0, l = items.length; i < l; i++) {
            out += options.fn(items[i]);
        }
        return out;
    });
    
    var alg_ref_template = Handlebars.compile($("#alg-ref-template").html());
    Handlebars.registerHelper('algref', function(alg, options) {
        return alg_ref_template(alg);
    });
    var alg_row_template = Handlebars.compile($("#alg-row-template").html());
    Handlebars.registerHelper('algrow', function(alg, options) {
        return alg_row_template(alg);
    });
    var alg_table_template = Handlebars.compile($("#alg-table-template").html());
    Handlebars.registerHelper('algtable', function(alg, options) {
        return alg_table_template(alg);
    });
    var cases_template = Handlebars.compile($("#cases-template").html());
    var CASES = {};
    window.CASES = CASES;
    for (var i in ALGORITHMS) {
        var alg = ALGORITHMS[i];
        alg.algurl = alg.alg
        alg.algurl = alg.algurl.replace(/'/g, "-");
        alg.algurl = alg.algurl.replace(/\s/g, "_");
        alg.algraw = alg.alg;
        alg.algraw = alg.algraw.replace(/\(([^\)]*)\)3/g, "$1 $1 $1");
        alg.algraw = alg.algraw.replace(/\(([^\)]*)\)2/g, "$1 $1");
        console.log(alg.algraw);
        try {
            CASES[alg.patid.charAt(0)].length;
        } catch (e) {
            CASES[alg.patid.charAt(0)] = [];
        }
        CASES[alg.patid.charAt(0)].push(alg);
    }
    var output = cases_template(CASES);
    $("#output").html(output);
})
