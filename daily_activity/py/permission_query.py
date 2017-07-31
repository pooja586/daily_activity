import frappe

@frappe.whitelist()
def get_permission_query_conditions(user):
	if not user: user = frappe.session.user

	roles = frappe.get_roles(user)
	if user == "Administrator":
		return ""
	else:
		if "Sales User" in roles :
			return "`tabDaily Activity1`.owner ='{0}'".format(user)
		elif "Sales Manager" in roles:
			return "`tabDaily Activity1`.owner ='{0}'".format(user)