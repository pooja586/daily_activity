// Copyright (c) 2017, NewIndictrans technologies and contributors
// For license information, please see license.txt

cur_frm.add_fetch('contact','mobile_no','contact_mobile_no')
cur_frm.add_fetch('contact','email_id','contact_email')

frappe.ui.form.on('Daily Activity1', {
	onload: function(frm) {
		// cur_frm.set_value("dsr_owner",frappe.session.user)

		if (!frm.doc.date) {
    			frm.set_value("date", get_today());
    	}
	},
	refresh: function(frm) {
		frm.add_custom_button(__('Close'), function() {
			frappe.set_route("List", "Daily Activity")			 
		})
	}
});


cur_frm.fields_dict['contact'].get_query = function(doc) {
return {
		query: "daily_activity.daily_activity.doctype.daily_activity1.daily_activity1.get_contact_details",
		filters: {
			 		"customer" : cur_frm.doc.customer
				}
		}
}
