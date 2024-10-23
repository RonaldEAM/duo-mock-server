const express = require("express");
const app = express();

const admin_v1_integrations = require("./responses/admin_v1_integrations");
const admin_v1_phones = require("./responses/admin_v1_phones");
const admin_v1_settings = require("./responses/admin_v1_settings");
const admin_v1_admins = require("./responses/admin_v1_admins");
const admin_v1_groups = require("./responses/admin_v1_groups");
const admin_v1_users = require("./responses/admin_v1_users");

const port = 80;

app.get("/admin/v1/integrations", (req, res) => {
  res.json(admin_v1_integrations);
});

app.get("/admin/v1/phones", (req, res) => {
  res.json(admin_v1_phones);
});

app.get("/admin/v1/settings", (req, res) => {
  res.json(admin_v1_settings);
});

app.get("/admin/v1/admins", (req, res) => {
  res.json(admin_v1_admins);
});

app.get("/admin/v1/groups", (req, res) => {
  res.json(admin_v1_groups);
});

app.get("/admin/v1/users", (req, res) => {
  res.json(admin_v1_users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
