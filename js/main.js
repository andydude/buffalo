$(function(){
    
    var ALGORITHMS = [
        {"id": "D1", "alg": "F R' F' R", "notes": "A > B"},
        {"id": "D2", "alg": "R' F R F'", "notes": "C < B"},
        {"id": "", "alg": "", "notes": ""},
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
    var alg_table_output = alg_table_template(ALGORITHMS);
    $("#alg-table-output").html(alg_table_output);
})
