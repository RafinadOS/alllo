'use strict'

function UserList(options)
{
    this.options = options;
    this.users = [];
    this.targetNode = options.targetNode;
    this.layout = {
        container: null
    }
}

UserList.prototype = 
{
    addUser: function(options)
    {
        options = options || {};

    },

    getListWrapper: function()
    {
        if(!this.layout.contaier)
        {
            this.layout.contaier = createElemenet('div')
        };

        return this.layout.contaier;
    },

    draw: function()
    {
        console.log(this.options.users)
        this.targetNode.appendChild(this.getListWrapper());
    }
};


function UserListUser(options)
{
    this.id = options.id;
    this.name = options.name;
    this.layout = {
        container: null,
        name: null
    }
}

UserListUser.prototype =
{
    getNameNode: function()
    {
        if(!this.layout.name)
        {
            this.layout.name = createElemenet('div')
        }

        return this.layout.name;
    },
    render: function()
    {
        if(!this.layout.container)
        {
            this.layout.container = createElemenet('div', {
                id: this.id
            });
        }
        return this.layout.container;
    }
}




