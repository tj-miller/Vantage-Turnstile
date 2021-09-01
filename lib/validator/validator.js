var passwordConstraints = {
    password: {
        presence: true,
        format: {
            pattern: /^(?=.{4,}).*$/,
            message: "Password must be more than 4 characters"
        },
    },
};

var nicknameConstraints = {
    nickname: {
        presence: true,
        format: {
            pattern: /^\S*$/,
            message: "cannot contain spaces"
        },
        length: {
            minimum: 2,
            maximum: 25,
            message: "Must not be more than 25 or less than 2 characters"
        }
    }
};

var emailConstraints = {
    email: {
        email: {
          message: 'is not valid.'
        }
    }
}

validate.formatters.custom = function (errors) {
    return errors.map(function (error) {
        return error.validator;
    });
};


