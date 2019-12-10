define({ "api": [
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
    "filename": "./doc/main.js",
    "group": "C__Users_LucNi_OneDrive_Documents_Studium_Semester_5_OpenBadges_OpenBadges_api_doc_main_js",
    "groupTitle": "C__Users_LucNi_OneDrive_Documents_Studium_Semester_5_OpenBadges_OpenBadges_api_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/user/token/refresh",
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
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Refresh token is invalid or too old. Please sign in with your user credentials.&quot;}</code></p>"
          },
          {
            "group": "On error",
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
    "url": "/user/refreshToken",
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
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Refresh token is invalid or too old. Please sign in with your user credentials.&quot;}</code></p>"
          },
          {
            "group": "On error",
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
    "url": "/user/password/request",
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
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
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
    "url": "/user/password/reset",
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
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Request password reset expired.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during updating the password.</p>"
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
    "url": "/user/signin",
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
            "description": "<p>the username of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the password of the user</p>"
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
            "description": "<p><code>User is successfully registered</code></p>"
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
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Email or password is wrong&quot;}</code></p>"
          },
          {
            "group": "On error",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database or creating a JWT</p>"
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
    "url": "/user/signout",
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
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZWY2ZjczZWViMGFiNmUwY2IzNzdiMiIsImlhdCI6MTU3NTk3ODAxNCwiZXhwIjoxNTc1OTc4MDc0fQ.ls6uhrJ6pvJquxhcocwjlvJBkM5opwbnbyx5N1PRpoQ",
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
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;JSON Web Token is invalid. Please sign in with your user credentials.&quot;}</code></p>"
          },
          {
            "group": "On error",
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
    "url": "/user/signup",
    "title": "Sign up",
    "name": "signUp",
    "description": "<p>Sign up a new OpenBadges-user.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameters for creating a new OpenBadges-user": [
          {
            "group": "Parameters for creating a new OpenBadges-user",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Name the full first name of the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameters for creating a new OpenBadges-user",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Name the full last name of the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameters for creating a new OpenBadges-user",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the user's place of residence; must consist of at least 2 characters</p>"
          },
          {
            "group": "Parameters for creating a new OpenBadges-user",
            "type": "Number",
            "optional": false,
            "field": "postalcode",
            "description": "<p>the postal code of the user's place of residence; minimum 01067, maximal 99998</p>"
          },
          {
            "group": "Parameters for creating a new OpenBadges-user",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>the birthday of the user</p>"
          },
          {
            "group": "Parameters for creating a new OpenBadges-user",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email for the user</p>"
          },
          {
            "group": "Parameters for creating a new OpenBadges-user",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username for the user; it is used for signing in</p>"
          },
          {
            "group": "Parameters for creating a new OpenBadges-user",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the desired password for the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameters for creating a new OpenBadges-user",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>confirm the desired password for the user; must consist the same string as password</p>"
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
            "description": "<p><code>User is successfully registered</code></p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:[&quot;earner&quot;]}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "String",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &lt;Passed parameters are not valid&gt;}</code></p>"
          },
          {
            "group": "On error",
            "type": "String",
            "optional": false,
            "field": "409",
            "description": "<p><code>{&quot;message&quot;: &quot;Email already exists&quot;}</code> or <code>{&quot;error&quot;: &quot;Username already exists&quot;}</code></p>"
          },
          {
            "group": "On error",
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
