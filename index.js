var snippets = [

    {
        prefix: "for",
        body: ["for (let i = 0; i < size; i++) { \n }  \n "]
    },
    {
        prefix: "foreach",
        "body": [
            "array.forEach(element => { \n});\n "
        ]
    },
    {

        "prefix": "function",
        "body": [
            "function name (params)\n {\n }\n "
        ]
    },
    {
        "prefix": "if",
        "body": [
            "if (condition) {\n }\n "
        ],
    },
    {
        "prefix": "log",
        "body": [
            "console.log();"
        ],
    }
];


const editor = document.getElementById('editor');

function changeVal(val) {
    editor.textContent = editor.value;
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 9) {
        event.preventDefault();
        let val=editor.value
        const input = val.split(" ");
        console.log(input)
        checkSuggestion(input[input.length - 1]);

    }
});

function checkSuggestion(keyword) {
    // console.log()
    if (_isContains(snippets, keyword)) {
        for (let i = 0; i < snippets.length; ++i) {
            const obj = snippets[i];
            // console.log(obj)
            if (obj.prefix === keyword) {
                console.log(editor.value.substring(0,editor.value.length-keyword.length))
                editor.value = editor.value.substring(0,editor.value.length-keyword.length)+ obj.body
            }
        }
    } else {
        console.log("Nope")
    }
}

function _isContains(json, value) {
    // console.log(value +"val")
    let contains = false;
    Object.keys(json).some(key => {
        contains = typeof json[key] === 'object' ? _isContains(json[key], value) : json[key] === value;
        return contains;
    });
    return contains;
}