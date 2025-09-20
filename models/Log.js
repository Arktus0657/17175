const mongoose = require("mongoose");

const validStacks = ["backend", "frontend"];
const validLevels = ["debug", "info", "warn", "error", "fatal"];
const backendPackages = ["cache", "controller", "cron_job", "db", "domain", "handler", "repository", "route", "service"];
const frontendPackages = ["api", "component", "hook", "page", "state", "style"];
const commonPackages = ["auth", "config", "middleware", "utils"];

const logSchema = new mongoose.Schema({
  stack: {
    type: String,
    enum: validStacks,
    required: true
  },
  level: {
    type: String,
    enum: validLevels,
    required: true,
  },
  package: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        if (this.stack === "backend") {
          return [...backendPackages, ...commonPackages].includes(value);
        } else if (this.stack === "frontend") {
          return [...frontendPackages, ...commonPackages].includes(value);
        }
        return false;
      },
      message: (props) => `${props.value} is not allowed for stack ${props.instance.stack}`,
    },
  },
  message: {
    type: String,
    required: true 
},
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Log", logSchema);