module.exports = 

    
    
(c) => ({
    
        data: function AeplSetName(name, autodefine) {
            Object.defineProperty(c, "name", { value: name });
            if (autodefine) return new Function("cl", `return ${name} = cl`)(c);
        },

    
        refs: [ "setName", "setN" ]
        
});
