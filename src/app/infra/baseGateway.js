module.exports = (() => {
    let propertyMapper
    
    return class BaseGateway {
        constructor(mapper) {
            propertyMapper = mapper
        }
        // NOTE: These are propery mappers in order to "translate" source data to something
        //       that our domain understands and viceversa.
        mapToSource(data) {
            const mappedData = {};
            
            Object.keys(propertyMapper).forEach((key) => {
                const value = data[propertyMapper[key]];
                if (value) mappedData[key] = value;
            });
    
            return mappedData;
        }
    
        mapToDomain(data) {
            const mappedData = {};
            
            Object.keys(data).forEach((key) => {
                const newKey = propertyMapper[key];
                const value = data[key];
                if (value || value === 0) mappedData[newKey] = value;
            });
    
            return mappedData;
        };
    }
})()

