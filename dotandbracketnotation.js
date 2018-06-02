/**
 * Travis Gautier 2018
 */

circle.location={x:1};          //dot notation simpler, less verbose
circle['location'] = {x:1};     //bracket notation, string to reference property, good for dynamically accessing location property
const propertyName = 'location';
circle[propertyName] = {x:1};

delete circle['location'];