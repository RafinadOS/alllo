function createElemenet(tag, param)
{
    var element = document.createElement(tag);

    if(param.className || param.class)
        element.className = param.className ? param.className : param.class;
        
    if(param.id)
        element.id = param.id;

    if(param.events)
    {
        for(action in param.events)
        {
            element.addEventListener(action, param.events[action], false);  
        }
    }

    if(param.style)
    {
        var attrStyle = '';
        for(attribute in param.style)
        {
            element.style[attribute] = param.style[attribute];
        }
    }

    console.log(element)
    return element;
}