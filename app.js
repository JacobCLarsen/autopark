import { chromium } from "playwright";

let licensePlate = "DN67058";
let phoneNumber = "30261909";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Replace with the actual URL of the APCOA guest parking page
  await page.goto(
    "https://online.mobilparkering.dk/12cdf204-d969-469a-9bd5-c1f1fc59ee34"
  );

  // Fill in the license plate
  await page.fill("#inline-full-name", licensePlate);

  // Fill in the phone number (optional)
  await page.fill(
    'input[placeholder="Indtast mobilnummer (valgfri)"]',
    phoneNumber
  );

  console.log("✅ Fields filled");

  // Clicking the "accpet terms and conditions" and "forsæt" buttons

  // Accept terms and conditions (checkbox)
  await page.getByLabel("Jeg accepterer").check();

  // Click the "Fortsæt" button
  await page.getByText("Fortsæt").click();

  await page.waitForURL(
    "https://online.mobilparkering.dk/12cdf204-d969-469a-9bd5-c1f1fc59ee34/confirm"
  );

  await page.getByText("Bekræft og opret").click();

  await page.waitForURL(
    "https://online.mobilparkering.dk/12cdf204-d969-469a-9bd5-c1f1fc59ee34/receipt"
  );

  // Optional: take screenshot for debugging
  await page.screenshot({ path: "filled-form.png" });

  console.log("Parking sucessfully registered for", licensePlate);

  await browser.close();
})();
