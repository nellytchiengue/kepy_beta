// TODO: Replace these placeholder values with your actual URLs and IDs.

// 1. Google Form for Sales Entry
// Instructions: Create a Google Form with a text field for the Vendor ID.
// Get the pre-filled link:
// - Go to your form, click the "..." menu, and select "Get pre-filled link".
// - Enter a sample Vendor ID (e.g., "TEST_ID") into the corresponding field.
// - Click "Get link" and copy it.
// - The link will look like: https://docs.google.com/forms/d/e/.../viewform?usp=pp_url&entry.123456789=TEST_ID
// - GOOGLE_FORM_URL_BASE is the part before "?".
// - GOOGLE_FORM_VENDOR_ID_PARAM is the "entry.123456789" part.
// export const GOOGLE_FORM_URL_BASE = 'https://docs.google.com/forms/d/e/1FAIpQLScCTYShKjnXIa7ynOOnifuZjXBJwAusZpd4khAk8ttY8NmGxg/viewform';

export const GOOGLE_FORM_URL_BASE = 'https://docs.google.com/forms/d/e/1FAIpQLScniIil6EyJtdGkidqUbTwOKDc7Dzhr3u6gdx_sCk1LrA4Neg/viewform';
export const GOOGLE_FORM_VENDOR_ID_PARAM = 'entry.741190853'; // Example: 'entry.123456789'

// 2. Looker Studio URLs
// Instructions: In your Looker Studio report:
// - For the consolidated view, simply copy the report's URL.
// - For the vendor view, create a report-level parameter (e.g., named "vendorId").
// - Use this parameter to filter your charts.
// - The base URL is the URL of the page containing the vendor-specific charts.

// export const LOOKER_CONSOLIDATED_URL = 'https://lookerstudio.google.com/reporting/38bcbac3-ac1e-4db9-bf07-2106f656ce9e/page/p_a1b2c3d4e5';
// export const LOOKER_VENDOR_BASE_URL = 'https://lookerstudio.google.com/reporting/38bcbac3-ac1e-4db9-bf07-2106f656ce9e/page/p_f6g7h8i9j0';

export const LOOKER_CONSOLIDATED_URL = 'https://lookerstudio.google.com/reporting/270d4ab3-481b-45db-a3de-cc0c93f81758';
export const LOOKER_VENDOR_BASE_URL = 'https://lookerstudio.google.com/reporting/270d4ab3-481b-45db-a3de-cc0c93f81758';



// 3. Demo Request Form
// Instructions: Create a Google Form for demo requests and get its public URL.
export const DEMO_CONTACT_FORM_URL = 'https://forms.gle/r4N9DJeLQMUyumU4A';

// 4. Contact Email
export const CONTACT_EMAIL = 'contact@tpmn.app';

// 5. Manager App URL
// This now points to the manager route in the SPA.
export const MANAGER_APP_URL = '#manager'; 

// 6. Consolidated Google Sheet URL
// The direct link to the Google Sheet for managers.
// We use /preview instead of /edit to provide a cleaner, view-only link
// that is less likely to be blocked by browser security policies.

// export const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1QpW10jc3LJQ9N2_wF8vLlOKIT8P9-LGKj67SK0dM4Hc/preview#gid=878227682';
export const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1QpW10jc3LJQ9N2_wF8vLlOKIT8P9-LGKj67SK0dM4Hc/preview#gid=878227682';