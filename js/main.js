$(function(){
    
    var ALGORITHMS = [
        {"id": "#", "case": "B?", "alg": "(F' U F U')3", "notes": ""},
        {"id": "#", "case": "B?", "alg": "(U F' U' F)3", "notes": ""},
        {"id": "#", "case": "D?", "alg": "(R U' R' U)3", "notes": ""},
        {"id": "#", "case": "D?", "alg": "(U' R U R')3", "notes": ""},
        {"id": "#", "case": "C?", "alg": "(R' F R F')3", "notes": ""},
        {"id": "#", "case": "C?", "alg": "(F R' F' R)3", "notes": ""},
        {"id": "#", "case": "Fc", "alg": "R U' R' U", "notes": ""},
        {"id": "#", "case": "Ib", "alg": "U' R U R'", "notes": ""},
        {"id": "#", "case": "Jb", "alg": "R' F R F'", "notes": ""},
        {"id": "#", "case": "K?", "alg": "(R U' R' U)2", "notes": ""},
        {"id": "#", "case": "K?", "alg": "(R' F R F')2", "notes": ""},
        {"id": "#", "case": "K?", "alg": "(U F' U' F)2", "notes": ""},
        {"id": "#", "case": "Mi", "alg": "F R' F' R", "notes": ""},
        {"id": "#", "case": "Ni", "alg": "U F' U' F", "notes": ""},
        {"id": "#", "case": "P?", "alg": "(F R' F' R)2", "notes": ""},
        {"id": "#", "case": "P?", "alg": "(F' U F U')2", "notes": ""},
        {"id": "#", "case": "P?", "alg": "(U' R U R')2", "notes": ""},
        {"id": "#", "case": "Qm", "alg": "F' U F U'", "notes": ""},
        {"id": "#", "case": "X", "alg": "", "notes": ""},
        {"id": "#", "case": "X", "alg": "", "notes": ""},
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
            CASES[alg.case.charAt(0)].length;
        } catch (e) {
            CASES[alg.case.charAt(0)] = [];
        }
        CASES[alg.case.charAt(0)].push(alg);
    }
    var output = cases_template(CASES);
    $("#output").html(output);
})
