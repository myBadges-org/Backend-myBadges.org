define({ "api": [
  {
    "type": "put",
    "url": "/api/v1/admin/badge/:badgeId/project/:projectId/assigne/user/:userId",
    "title": "Assigne a project-related Badge",
    "name": "adminAssigneProjectBadge",
    "description": "<p>Assigne a project-related Badge to a specified user of given project.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge is assigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge is already assigned to user.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User is not related to given project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;Project not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/badge.js",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/domain/domainId",
    "title": "Ban domain",
    "name": "adminDeleteDomain",
    "description": "<p>Ban domain from collection, which can access specific routes.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "domainId",
            "description": "<p>the ID of the Domain you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Domain deleted successfully.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Domain not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/domain.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/badge",
    "title": "Get Badges",
    "name": "adminFindBadge",
    "description": "<p>Get (all) Badges by different query.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>find Badges by its name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>find Badges by its description</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "issuer",
            "description": "<p>the ID of the issuer you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>'achievement', 'professional skill' or 'meta skill'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badges found successfully.</code></p>"
          }
        ],
        "Created 201": [
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "badges",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;requestor&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: true, &quot;exists&quot;: true, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/badge.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/domain",
    "title": "Get all domains",
    "name": "adminGetDomains",
    "description": "<p>Get domains, which can access specific routes.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Domain found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "domain",
            "description": "<p><code>{&quot;domain&quot;:&quot;http://localhost:3000&quot;, &quot;description&quot;: &quot;further information&quot;}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/domain.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/v1/project/:projectId/participants",
    "title": "Get participants of one project",
    "name": "adminGetParticipants",
    "description": "<p>Getting all participants of one project by ID</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Participants found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "participants",
            "description": "<p><code>[{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Project not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/project.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/domain",
    "title": "Allow domain",
    "name": "adminPostDomain",
    "description": "<p>Add domain to collection, which can access specific routes.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>name of the domain, e.g. http://localhost:3000</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>further information about the domain</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Domain is successfully added.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "domain",
            "description": "<p><code>{&quot;domain&quot;:&quot;http://localhost:3000&quot;, &quot;description&quot;: &quot;further information&quot;}</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>valid JSON Web Token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/domain.js",
    "groupTitle": "Admin"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/badge/:badgeId",
    "title": "Change Badge",
    "name": "adminPutBadge",
    "description": "<p>Change information of Badge.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>title of Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>a brief summary of the Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "critera",
            "description": "<p>criterias getting this Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "exists",
            "description": "<p>if false, badge is deactivated</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>'achievement', 'professional skill' or 'meta skill'</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>image-File (Only images with extension 'PNG', 'JPEG', 'JPG' and 'GIF' are allowed.)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge updated successfully.</code> or </br> <code>Badge not changed.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badge",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;: user, &quot;requestor&quot;:[], &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: false, &quot;exists&quot;: true, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/badge.js",
    "groupTitle": "Admin"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/badge/:badgeId/project/:projectId/unassigne/user/:userId",
    "title": "Unassigne a project-related Badge",
    "name": "adminUnassigneProjectBadge",
    "description": "<p>Unassigne a project-related Badge to a specified user of given project.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge is unassigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge is already unassigned to user.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User is not related to given project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;Project not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/badge.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/user",
    "title": "Get all users",
    "name": "getAllUser",
    "description": "<p>Get details about all registered users.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>All users found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users",
            "description": "<p><code>[{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/user.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/user/:userId",
    "title": "Get one user",
    "name": "getOneUser",
    "description": "<p>Get details about one user.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/user.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/signin",
    "title": "Sign in",
    "name": "signInAdmin",
    "description": "<p>Sign in the admin.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username of the admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the password of the admin</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Admin successfully signed in.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>valid JSON Web Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>valid refresh token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Username or password is wrong.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database or creating a JWT.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/login.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/signup",
    "title": "Sign up",
    "name": "signUpAdmin",
    "description": "<p>Sign up a new OpenBadges-Admin. (Only a logged in Admin can create a new Admin account.)</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>full first name of the admin; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>full last name of the admin; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the admin's place of residence; must consist of at least 2 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "postalcode",
            "description": "<p>the postal code of the admin's place of residence; minimum 01067, maximal 99998</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>the birthday of the admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email for the admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username for the admin; it is used for signing in</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the desired password for the admin; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>confirm the desired password for the admin; must consist the same string as password</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "profile",
            "description": "<p>image-File (Only images with extension 'PNG', 'JPEG', 'JPG' and 'GIF' are allowed.)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Admin is successfully registered.</code></p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;admin&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "409",
            "description": "<p><code>{&quot;message&quot;: &quot;Email already exists.&quot;}</code> or </br> <code>{&quot;error&quot;: &quot;Username already exists.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/login.js",
    "groupTitle": "Admin"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/:badgeId/assigne/user/:userId",
    "title": "Assigne a Badge",
    "name": "assigneBadge",
    "description": "<p>Assigne a Badge to an user.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge is assigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge is already assigned to user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission assigning the Badge to an user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/project/:projectId/assigne",
    "title": "Assigne multiple project-related Badges",
    "name": "assigneMultipleProjectBadges",
    "description": "<p>Assigne mutliple badges of a project to users of the given project.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "badges",
            "description": "<p>JSON-Object with userIds as Object-Key and the badgeIds in an array as value. </br> (e.g. <code>{&lt;userId&gt;: [&lt;badgeId&gt;, &lt;badgeId&gt;]}</code>)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badges are assigned successfully to users.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "info",
            "description": "<p><code>{&quot;alreadyAssigned&quot;: &lt;Number&gt;, &quot;userNotFound&quot;: &lt;Number&gt;, &quot;badgeNotFound&quot;: &lt;Number&gt;, &quot;badgeNotRelatedToProject&quot;: &lt;Number&gt;, &quot;userNotRelatedToProject&quot;: &lt;Number&gt;}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission assigning the Badges to the users.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Project not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/:badgeId/project/:projectId/assigne/user/:userId",
    "title": "Assigne a project-related Badge",
    "name": "assigneProjectBadge",
    "description": "<p>Assigne a project-related Badge to a specified user of given project.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the Project you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge is assigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge is already assigned to user.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User is not related to given project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission assigning the Badge to an user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;Project not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "type": "post",
    "url": "/api/v1/badge",
    "title": "Create Badge",
    "name": "createBadge",
    "description": "<p>Create a new Badge.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>title of Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief summary of the Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "critera",
            "description": "<p>criterias getting this Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>'achievement', 'professional skill' or 'meta skill'</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>image-File (Only images with extension 'PNG', 'JPEG', 'JPG' and 'GIF' are allowed.)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge is succesfully created.</code></p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "badge",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;requestor&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;category&quot;: &quot;achievement&quot;, &quot;exists&quot;: true, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "get",
    "url": "/api/v1/badge/:badgeId",
    "title": "Get Badge",
    "name": "getBadge",
    "description": "<p>Get one Badge by its ObjectId.</p>",
    "group": "Badge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badge",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;: user, &quot;requestor&quot;: [], &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;category&quot;: &quot;achievement&quot;, &quot;exists&quot;: true, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "get",
    "url": "/api/v1/badge",
    "title": "Get Badges",
    "name": "getBadges",
    "description": "<p>Get (all) Badges by different query which exist.</p>",
    "group": "Badge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>find Badges by its name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>find Badges by its description</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "issuer",
            "description": "<p>find Badges by its issuer/ mentor</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>'achievement', 'professional skill' or 'meta skill'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badges found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badges",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;requestor&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;category&quot;: &quot;achievement&quot;, &quot;exists&quot;: true, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "get",
    "url": "/api/v1/badge/me",
    "title": "Get my Badges",
    "name": "getBadgesMe",
    "description": "<p>Get (all) Badges of currently signed in User by different queries.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>find Badges by its name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>find Badges by its description</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "issuer",
            "description": "<p>find Badges by its issuer/ mentor</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>'achievement', 'professional skill' or 'meta skill'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badges found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badges",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;requestor&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;category&quot;: &quot;achievement&quot;, &quot;exists&quot;: true, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/badgeId/grant/userId",
    "title": "Grant permission to (un)assign a badge",
    "name": "grantPermissionAssignBadge",
    "description": "<p>Grant a user permission to (un)assign a badge. (Only &quot;Badge-issuer&quot; have the permission.)</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User has successfully received permission to assign the badge.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;User has already permission to assign the badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission to grant permissions regarding the badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/badgeId/issuer/userId",
    "title": "Grant permission to manage a badge",
    "name": "issuerBadge",
    "description": "<p>Grant a user permission to manage a badge. He becomes a issuer. (Only &quot;Badge-issuer&quot; have the permission.)</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User has successfully received permission to manage the badge.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;User has already permission to manage the badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission to grant permissions regarding the badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/:badgeId",
    "title": "Change Badge",
    "name": "putBadge",
    "description": "<p>Change information of Badge.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>title of Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>a brief summary of the Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "critera",
            "description": "<p>criterias getting this Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>'achievement', 'professional skill' or 'meta skill'</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>image-File (Only images with extension 'PNG', 'JPEG', 'JPG' and 'GIF' are allowed.)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge updated successfully.</code> or </br> <code>Badge not changed.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badge",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;requestor&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;category&quot;: &quot;achievement&quot;, &quot;exists&quot;: true, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission putting the Badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/:badgeId/deactivation",
    "title": "Deactivate Badge",
    "name": "putBadgeHidden",
    "description": "<p>Deactivate Badge.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge is successfully deactivated.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission deactivating Badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "409",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge is already deactivated.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/badgeId/request",
    "title": "Request permission to (un)assign a badge",
    "name": "requestPermissionAssignBadge",
    "description": "<p>Request permission to (un)assign a badge.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User has successfully submitted his request.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;User has already submitted his request.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User has already permission to assign the badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/badgeId/revoke/userId",
    "title": "Revoke permission to (un)assign a badge",
    "name": "revokePermissionAssignBadge",
    "description": "<p>Revoke a user permission to (un)assign a badge. (Only &quot;Badge-issuer&quot; have the permission.)</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User has successfully received no permission to assign the badge.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;User has already no permission to assign the badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission to revoke permissions regarding the badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/badge/:badgeId/unassigne/user/:userId",
    "title": "Unassigne a Badge",
    "name": "unassigneBadge",
    "description": "<p>Unassigne a Badge to an user.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge is unassigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge is already unassigned to user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission unassigning the Badge to an user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/:badgeId/project/:projectId/unassigne/user/:userId",
    "title": "Unassigne a project-related Badge",
    "name": "unassigneProjectBadge",
    "description": "<p>Unassigne a project-related Badge to a specified user of given project.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge is unassigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge is already unassigned to user.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User is not related to given project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission unassigning the Badge to an user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;Project not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_LucNi_OneDrive_Documents_Studium_Semester_6_SHK_senseBox_OpenBadges_Backend_docs_main_js",
    "groupTitle": "C__Users_LucNi_OneDrive_Documents_Studium_Semester_6_SHK_senseBox_OpenBadges_Backend_docs_main_js",
    "name": ""
  },
  {
    "type": "put",
    "url": "/api/v1/domain/badge/:badgeId/assigne/user/:userId",
    "title": "Assigne a Badge",
    "name": "domainAssigneBadge",
    "description": "<p>Assigne a Badge to an user. Only accessible for certain domains.</p>",
    "group": "Domain",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge is assigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge is already assigned to user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/domain/badge.js",
    "groupTitle": "Domain"
  },
  {
    "type": "get",
    "url": "/api/v1/domain/badge",
    "title": "Get Badges",
    "name": "domainFindBadge",
    "description": "<p>Get (all) Badges by different query. Only accessible for certain domains.</p>",
    "group": "Domain",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>find Badges by its name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>find Badges by its description</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "issuer",
            "description": "<p>the ID of the issuer you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>'achievement', 'professional skill' or 'meta skill'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badges found successfully.</code></p>"
          }
        ],
        "Created 201": [
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "badges",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;requestor&quot;:{&quot;_id&quot;: ObjectId, &quot;firstname&quot;:&quot;Max&quot;, &quot;lastname&quot;:&quot;Mustermann&quot;}, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: true, &quot;exists&quot;: true, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/domain/badge.js",
    "groupTitle": "Domain"
  },
  {
    "type": "get",
    "url": "/api/v1/domain/user/:userId",
    "title": "Get one user",
    "name": "domainGetOneUser",
    "description": "<p>Get details about one user. Only accessible for certain domains.</p>",
    "group": "Domain",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/domain/badge.js",
    "groupTitle": "Domain"
  },
  {
    "type": "post",
    "url": "/api/v1/project",
    "title": "Create project",
    "name": "createProject",
    "description": "<p>Create a new project.</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId-Array",
            "optional": false,
            "field": "badge",
            "description": "<p>the ObjectId of global badges for the project (min: 1) </br> example: <code>[&quot;5e1b0bafeafe4a84c4ac31a9&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>the provider of the project might be specified by the creator</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "postalcode",
            "description": "<p>postalcode of the building where the project take place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>adress of the location from the project</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinates-Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>coordinates of the location from the project </br> example: <code>[longitude, latitude]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>topic of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief summary about the project contents</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirements",
            "description": "<p>a brief summary about the project requirements</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startdate",
            "description": "<p>Date of the start of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "enddate",
            "description": "<p>Date of the end of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>maximal amount of the project participants</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>image-File (Only images with extension 'PNG', 'JPEG', 'JPG' and 'GIF' are allowed.)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Project is successfully created.</code></p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "project",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;provider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;All badges must be assignable by the project-creator.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/v1/project/creator/me/",
    "title": "Get my created projects",
    "name": "getMyCreatedProjects",
    "description": "<p>Get (all) created projects of currently signed in User by different queries.</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>project name</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinates-Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>coordinates in which radius might be an project </br> example: <code>[longitude, latitude]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "radius",
            "description": "<p>radius [in km] about a pair of coordinates</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "startdate",
            "description": "<p>greater (or equal) than the startdate of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "enddate",
            "description": "<p>lower (or equal) than the enddate of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "topic",
            "description": "<p>project topic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>project type (<code>online</code> or <code>presence</code>)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Projects found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "projects",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;provider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;To filter projects in a certain radius, the parameters &quot;coordinates&quot; and &quot;radius&quot; are required.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/v1/project/me",
    "title": "Get my projects",
    "name": "getMyProjects",
    "description": "<p>Get (all) projects of currently signed in User by different queries.</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>project name</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinates-Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>coordinates in which radius might be an project </br> example: <code>[longitude, latitude]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "radius",
            "description": "<p>radius [in km] about a pair of coordinates</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "startdate",
            "description": "<p>greater (or equal) than the startdate of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "enddate",
            "description": "<p>lower (or equal) than the enddate of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "topic",
            "description": "<p>project topic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>project type (<code>online</code> or <code>presence</code>)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Projects found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "projects",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;provider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;To filter projects in a certain radius, the parameters &quot;coordinates&quot; and &quot;radius&quot; are required.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/v1/project/:projectId/participants",
    "title": "Get participants of one project",
    "name": "getParticipants",
    "description": "<p>Getting all participants of one project by ID.</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Participants found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "participants",
            "description": "<p><code>[{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Project not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission getting the participants of the project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/v1/project/:projectId",
    "title": "Get project",
    "name": "getProject",
    "description": "<p>Get one project by project-id.</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Project found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "project",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;provider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Project not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/v1/project",
    "title": "Get projects",
    "name": "getProjects",
    "description": "<p>Get all projects respectivly get projects by different parameters which exist.</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>project name</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinates-Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>coordinates in which radius might be an project </br> example: <code>[longitude, latitude]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "radius",
            "description": "<p>radius [in km] about a pair of coordinates</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "startdate",
            "description": "<p>greater (or equal) than the startdate of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "enddate",
            "description": "<p>lower (or equal) than the enddate of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "topic",
            "description": "<p>project topic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>project type (<code>online</code> or <code>presence</code>)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Project found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "projects",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;provider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;To filter projects in a certain radius, the parameters &quot;coordinates&quot; and &quot;radius&quot; are required.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/api/v1/project/:projectId/badge/notification",
    "title": "Notification of received project badges",
    "name": "projectBadgeNotification",
    "description": "<p>Sending an email to all project participants with their received project badges</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Email sent successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "accepted",
            "description": "<p><code>count of accepted email addresses</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rejected",
            "description": "<p><code>array of rejected email addresses</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Project not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission getting the participants of the project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during sending emails.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/api/v1/project/:projectId/code",
    "title": "Create code",
    "name": "projectCreateCode",
    "description": "<p>Create a code that, when used, will automatically log you into the project and give you all corresponding badges. Code is sent by email to the person who made the request (project creator or admin).</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Code generated successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p><code>generated code</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Project not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission getting the participants of the project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/api/v1/project/:projectId/user/registration",
    "title": "Register me",
    "name": "projectSignIn",
    "description": "<p>Register currently logged in user in a project, if the size is not reached.</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User registered successfully in project.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Project size is already reached.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User is already registered in project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Project not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/user.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/api/v1/project/code/:code",
    "title": "Register me by code",
    "name": "projectSignInCode",
    "description": "<p>Register currently logged in user in a project, if the size is not reached, by a code. Furthermore all belonging project badges are automatically assigned to the user.</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Code",
            "optional": false,
            "field": "code",
            "description": "<p>the code (6 letters) to sign in project and get all badges automatically</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User registered in project and all Badges are assigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Project size is already reached.&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;User is already registered in project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Code is invalid.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/user.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/api/v1/project/:projectId/user/deregistration",
    "title": "Deregister me",
    "name": "projectSignOut",
    "description": "<p>Deregister a user in a project, if the user was registered.</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User deregistered successfully from project.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;User is not registered in project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Project not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/user.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/api/v1/project/:projectId",
    "title": "Change project",
    "name": "putProject",
    "description": "<p>Change information of a project.</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId-Array",
            "optional": true,
            "field": "badge",
            "description": "<p>the ObjectId of global badges for the project (min: 1) </br> example: <code>[&quot;5e1b0bafeafe4a84c4ac31a9&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "provider",
            "description": "<p>the provider of the project might be specified by the creator</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "postalcode",
            "description": "<p>postalcode of the building where the project take place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>adress of the location from the project</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinates-Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>coordinates of the location from the project </br> example: <code>[longitude, latitude]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "topic",
            "description": "<p>topic of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>a biref summary about the project contents</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirements",
            "description": "<p>a brief summary about the project requirements</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "startdate",
            "description": "<p>Date of the start of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "enddate",
            "description": "<p>Date of the end of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "size",
            "description": "<p>maximal amount of the project participants; must be greater (equal) than the current signed participants</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>image-File (Only images with extension 'PNG', 'JPEG', 'JPG' and 'GIF' are allowed.)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Project is updated successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "project",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;provider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;All badges must be assignable by the project-creator.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission putting the project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Project not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/api/v1/project/:projectId/deactivation",
    "title": "Deactivate project",
    "name": "putProjectHidden",
    "description": "<p>Deactivate a project. The project might be no longer in offer.</p>",
    "group": "Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>the ID of the project you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Project is successfully deactivated.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Project not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission deactivating the project.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "409",
            "description": "<p><code>{&quot;message&quot;: &quot;Project is already deactivated.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/project/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/api/v1/teacher/users",
    "title": "Create users",
    "name": "teacherCreateUsers",
    "description": "<p>Sign up new (multiple) OpenBadges-Users.</p>",
    "group": "Teacher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>number of accounts to create</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Users are successfully registered.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Count has to be a positive number.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/teacher/user.js",
    "groupTitle": "Teacher"
  },
  {
    "type": "post",
    "url": "/api/v1/user/email/:emailToken",
    "title": "Confirm email",
    "name": "confirmEmail",
    "description": "<p>Confirm an email of an user.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailToken",
            "description": "<p>Email-Token, to confirm the email-address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 200": [
          {
            "group": "Created 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Email is successfully confirmed.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: Email-Token is not valid.}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/contact",
    "title": "Contact support",
    "name": "contact",
    "description": "<p>Send an email to the support of the deposited API-Email.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>the subject of the email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the content of the email (plaintext)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Emails are successfully sent.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during sending the email.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/contact.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/v1/user/me",
    "title": "Delete me",
    "name": "deleteMe",
    "description": "<p>Delete the user-account and every dependent project  of currently logged in user (exists to false).</p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User deleted successfully.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v1/user/me",
    "title": "Get details",
    "name": "getMe",
    "description": "<p>Get details about currently logged in user.</p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v1/user",
    "title": "Get user names",
    "name": "getSomeUsers",
    "description": "<p>Get names about part of registered users.</p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>limits the result, maximum are 10 returned items</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Users found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users",
            "description": "<p><code>[{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;_id&quot;: &lt;ObjectId&gt;}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/v1/user/me",
    "title": "Change information",
    "name": "putMe",
    "description": "<p>Update the information about currently logged in user.</p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastname",
            "description": "<p>Name the new full last name of the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>the user's new place of residence; must consist of at least 2 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "postalcode",
            "description": "<p>the new postal code of the user's place of residence; minimum 01067, maximal 99998</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>the new email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "profile",
            "description": "<p>image-File (Only images with extension 'PNG', 'JPEG', 'JPG' and 'GIF' are allowed.)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User information updated successfully.</code> or </br> <code>User information not changed.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/me",
    "title": "Create user",
    "name": "putMeMultiple",
    "description": "<p>Create an user based on an existing user that is not complete.</p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Name the new full first name of the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Name the new full last name of the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the user's new place of residence; must consist of at least 2 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "postalcode",
            "description": "<p>the new postal code of the user's place of residence; minimum 01067, maximal 99998</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the new email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>the day of birth of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "profile",
            "description": "<p>image-File (Only images with extension 'PNG', 'JPEG', 'JPG' and 'GIF' are allowed.)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User information updated successfully.</code> or </br> <code>User information not changed.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/token/refresh",
    "title": "Refresh token",
    "name": "refreshToken",
    "description": "<p>Refresh the authorization, if the refresh token is valid.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>the refresh token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Authorization successfully refreshed</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>valid JSON Web Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>valid refresh token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Refresh token is invalid or too old. Please sign in with your user credentials.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database or creating a JWT.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/authorization.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/password/request",
    "title": "Request reset password",
    "name": "requestResetPassword",
    "description": "<p>Requests a password reset (in case of forgotten password). A link to reset the password will then be sent in an email, which is valid for 12 hours.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username of the user; it is used for sending the email with all instructions</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Reset instructions successfully sent to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during sending the email with all instructions to reset the password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/password/reset",
    "title": "Reset password",
    "name": "resetPassword",
    "description": "<p>Reset the password with the resetPasswordToken.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetPasswordToken",
            "description": "<p>token to reset password sent through email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the new desired password for the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>confirm the new desired password for the user; must consist the same string as password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Password successfully reset.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Request password reset expired.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/signin",
    "title": "Sign in",
    "name": "signIn",
    "description": "<p>Sign in the user.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User successfully signed in</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>valid JSON Web Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>valid refresh token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Username or password is wrong&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database or creating a JWT.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/signout",
    "title": "Sign out",
    "name": "signOut",
    "group": "User",
    "description": "<p>Signs the user out, if JSON Web Token is valid. Invalidates the current JSON Web Token.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Signed out successfully</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;JSON Web Token is invalid. Please sign in with your user credentials.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database or creating the JWT.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/signup",
    "title": "Sign up",
    "name": "signUp",
    "description": "<p>Sign up a new OpenBadges-User.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>first name of the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>last name of the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the user's place of residence; must consist of at least 2 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "postalcode",
            "description": "<p>the postal code of the user's place of residence; minimum 01067, maximal 99998</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>the birthday of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email for the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username for the user; it is used for signing in</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the desired password for the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>confirm the desired password for the user; must consist the same string as password</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "profile",
            "description": "<p>image-File (Only images with extension 'PNG', 'JPEG', 'JPG' and 'GIF' are allowed.)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User is successfully registered.</code></p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: {&quot;path&quot;: &lt;String&gt;, &quot;size&quot;: &lt;Number&gt;, &quot;contentType&quot;: &quot;image/jpeg&quot;, &quot;originalName&quot;: &quot;originalName.jpeg&quot;}}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "409",
            "description": "<p><code>{&quot;message&quot;: &quot;Email already exists&quot;}</code> or </br> <code>{&quot;message&quot;: &quot;Username already exists&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  }
] });
