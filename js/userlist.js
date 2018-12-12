'use strict'

function UserList(options)
{
    this.options = options;
    this.users = [];
    this.targetNode = options.targetNode;
    this.layout = {
        container: null
    };
    this.loadData(options);
}

UserList.prototype = 
{
    addUser: function(options)
    {
        options = options || {};

        var user = new UserListItem(options);
        user.userList = this;

        this.users.push(user);
    },

    loadData: function(json)
    {
        json.users.forEach(function(item) {
            this.addUser(item);
        }, this);
    },

    getListWrapper: function()
    {
        if(!this.layout.container)
        {
            this.layout.container = createElemenet('div',
            {
                class: 'user-list'
            })
        };

        return this.layout.container;
    },

    draw: function()
    {
        var docFragment = document.createDocumentFragment();

        for (var user in this.users)
        {
            docFragment.appendChild(this.users[user].render());
        }

        this.getListWrapper().appendChild(docFragment);
        this.targetNode.appendChild(this.getListWrapper());
    }
};


function UserListItem(options)
{
    this.id = options.id;
    this.name = options.name;
    this.layout = {
        container: null,
        name: null
    }
}

UserListItem.prototype =
{
    getNameNode: function()
    {
        if(!this.layout.name)
        {
            this.layout.name = createElemenet('div', 
            {
                class: 'user-list-item-name',
                text: this.name
            })
        }

        return this.layout.name;
    },
    render: function()
    {
        if(!this.layout.container)
        {
            this.layout.container = createElemenet('div', {
                id: this.id,
                class: 'user-list-item'
            });

            this.layout.container.appendChild(this.getNameNode());
        }

        return this.layout.container;
    }
}




