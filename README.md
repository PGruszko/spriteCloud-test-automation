# UI & API Testing Assignment

**Author:** Paulina Gruszko  
**Date:** 27th of October 2025  
**Role:** QA Engineer

---

## Table of Contents

1. [My Approach](#1-my-approach)

   1. [Initial Analysis & Planning](#11-initial-analysis--planning)
   2. [Technology Choices](#12-technology-choices)
   3. [API Testing with Postman](#13-api-testing-with-postman)
   4. [UI Testing with Playwright](#14-ui-testing-with-playwright)
   5. [CI/CD Pipeline - The Biggest Challenge](#15-cicd-pipeline---the-biggest-challenge)
   6. [Documentation Approach](#16-documentation-approach)
   7. [Use of AI Tools - My Philosophy](#17-use-of-ai-tools---my-philosophy)
   8. [What I Learned](#18-what-i-learned)
   9. [If I Had More Time](#19-if-i-had-more-time)
   10. [Final Thoughts](#110-final-thoughts)

2. [Test Plan](#2-test-plan)

   1. [Introduction](#21-introduction)
   2. [Test Strategy](#22-test-strategy)
   3. [UI Test Cases](#23-ui-test-cases)
   4. [API Test Cases](#24-api-test-cases)
   5. [Test Data](#25-test-data)
   6. [Test Environment](#26-test-environment)
   7. [Entry & Exit Criteria](#27-entry--exit-criteria)
   8. [Test Execution](#28-test-execution)
   9. [Risks & Mitigation](#29-risks--mitigation)
   10. [Defect Management](#210-defect-management)
   11. [Test Maintenance](#211-test-maintenance)
   12. [Success Metrics](#212-success-metrics)
   13. [Appendix](#213-appendix)

3. [UI Testing Documentation](#3-ui-testing-documentation)
   1. [Overview](#31-overview)

---

# 1. My Approach

## Overview

This document outlines my personal approach and thought process in completing the UI & API testing assignment. I've included the challenges I faced, decisions I made, how I worked through the project and AI usage.

---

## 1.1 Initial Analysis & Planning

When I first received the assignment, I spent time carefully analyzing the requirements and identifying what I considered critical and important points to start with. I broke down the submission into manageable pieces and made notes about the key deliverables:

- UI tests for Sauce Demo
- API tests for ReqRes
- Test documentation and planning

Based on my experience, and with some support from Gemini, I drafted my first test plan. This helped me understand what steps I needed to follow and gave me a clear roadmap to organize my work. I find that having a structured plan from the beginning really helps me stay focused and ensures I don't miss anything important.

---

## 1.2 Technology Choices

### Why JavaScript?

I chose to implement the tests using **JavaScript** for several reasons:

**Current Learning Path:**  
I'm currently participating in a Playwright training course, and the recommendation there is to learn JavaScript first before moving to TypeScript. Since I've been studying JavaScript intensively recently, I felt this was a good opportunity to apply what I've learned.

**Professional Context:**  
I work as a Salesforce QA Engineer, and I'm actually studying for the Salesforce JavaScript Developer I certification. This assignment gave me a chance to strengthen my JavaScript skills in a practical testing context, which aligns perfectly with my career development goals.

**Resources:**  
Throughout the project, I regularly referenced the [Mozilla Developer Network (MDN) JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to ensure I was following best practices and using the language correctly. MDN has been a great resource for understanding JavaScript fundamentals, especially for things like data structures, operators, and function behaviors.

---

## 1.3 API Testing with Postman

I started with the API tests because I wanted to move with something I was already comfortable with. My first choice was **Postman**, which I have professional experience using for API testing.

### Working with AI Tools

While building the automation scripts in Postman, I used the **Postman AI Agent** to support me. It helped me:

- Generate initial test scripts
- Structure assertions

However, I want to be clear about my approach to AI: **I validated everything against the official Postman documentation**. I personally think AI is a very supportive tool that can improve the efficiency of my work and help troubleshoot issues. But I'm also aware of its limitations, including potential bias and hallucinations.

My process was:

1. Use AI for initial suggestions or when stuck
2. Review the generated code carefully
3. Cross-check against official documentation
4. Test thoroughly to ensure it works as expected
5. Modify as needed based on actual behavior

This approach helped me work faster while maintaining quality and understanding.

---

## 1.4 UI Testing with Playwright

After completing the API tests, I moved to UI testing with **Playwright**. This was newer territory for me, so I approached it methodically.

### Learning and Validation Process

I asked **Cursor Agent AI** for recommendations and best practices around:

- Page Object Model implementation
- Test structure and organization
- Playwright-specific features
- Assertion strategies

Again, similar to my Postman approach, I validated everything against two main sources:

1. [Playwright official documentation](https://playwright.dev/)
2. [MDN JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

The combination of these resources helped me understand not just _what_ to do, but _why_ certain approaches work better than others.

### The Tax Calculation Challenge

One of the more challenging parts was implementing the price validation logic, especially the **tax calculation**. The way the application calculates tax wasn't immediately obvious from the UI.
This took some trial and error, but I eventually figured out the correct formula and rounding approach. It was a good reminder that real-world testing often involves understanding the underlying business logic, not just checking if buttons work.

---

## 1.5 CI/CD Pipeline - The Biggest Challenge

By far, the **biggest challenge** for me was creating passing pipelines and getting the test reports properly integrated into the repository.

This took me a significant amount of time. I was:

- Reading through various documentation
- Watching YouTube tutorials
- Trying different configurations
- Debugging workflow failures
- Learning about GitHub Actions

It was challanging at times, especially when things didn't work the first (or second, or third) time. But I'm genuinely happy about this experience because **I managed to learn something**. Seeing my project with test reports successfully added to the repository was really satisfying.

This was probably the steepest learning curve in the entire assignment, but also one of the most valuable parts for my professional development.

---

## 1.6 Documentation Approach

I wanted to ensure the project was well-documented, not just for the reviewers, but also because good documentation is something I value in any project. I created multiple documentation files with **Cursor AI support**:

- **TEST-PLAN.md** - Comprehensive test strategy covering both UI and API
- **UI-TESTS.md** - Specific documentation for Playwright tests
- **API-TESTS.md** - Detailed API test documentation

I tried to strike a balance between being thorough and being concise. Each document serves a specific purpose and can be read independently or as part of the whole documentation suite.

---

## 1.7 Use of AI Tools - My Philosophy

I want to be transparent about how I used AI throughout this project:

**What AI Helped With:**

- Code refactoring and restructuring
- Generating initial boilerplate code
- Suggesting best practices and patterns
- Troubleshooting errors
- Creating documentation structure

**What I Did Myself:**

- All core test logic and validations
- Understanding the business requirements
- Analyzing the applications under test
- Making architectural decisions
- Validating AI suggestions against official docs
- Testing and verifying everything works correctly

**My position on AI:**
I view AI as a productivity tool, similar to having a very fast but sometimes unreliable resource to bounce ideas off. It's excellent for:

- Getting unstuck when facing syntax issues
- Learning new patterns quickly
- Generating repetitive code
- Finding alternative approaches

However, I always validate AI-generated code because:

- AI can hallucinate or provide outdated information
- It doesn't understand context as well as humans
- Best practices change, and AI training data may be old
- Critical thinking is still essential

---

## 1.8 What I Learned

This assignment taught me several things:

**Technical Skills:**

- Deeper understanding of Playwright and its features
- Better grasp of JavaScript, especially async/await patterns
- Experience with CI/CD pipelines and GitHub Actions
- API testing best practices with Postman

**Process Skills:**

- Importance of planning before coding
- Value of good documentation
- How to effectively use AI as a tool
- Debugging and troubleshooting different issues

**Professional Growth:**

- Confidence in learning new technologies
- Better understanding of test automation architecture
- Experience with modern testing tools and practices

---

## 1.9 If I Had More Time

Given additional time, I would have liked to:

- Add more edge case testing
- Implement visual regression testing
- Create a more robust reporting dashboard
- Add performance monitoring to the tests
- Explore cross-browser testing more thoroughly
- Implement data-driven testing with external data sources

---

## 1.10 Final Thoughts

This assignment had me learning new things, especially with the CI/CD pipeline setup. It was challenging, but I'm glad I took the time to figure it out rather than skipping it.

I approached this project with the same mindset I bring to my work: thoroughness, attention to detail, a willingness to learn, and transparency about my process and tools. I believe in using modern tools (including AI) to work efficiently, but always with validation and understanding.

I hope this document gives you insight into not just what I built, but how and why I made the decisions I did.

---

# 2. Test Plan

## 2.1 Introduction

### 2.1.1 Purpose

This document outlines the test plan for automated testing covering:

1. **UI Testing** - Sauce Demo e-commerce application (https://www.saucedemo.com)
2. **API Testing** - ReqRes API (https://reqres.in/)

The plan covers test scope, approach, test cases, test data, and execution strategy for both UI and API testing.

### 2.1.2 Scope

**In Scope:**

_UI Testing (Playwright):_

- UI functional testing for critical user flows
- End-to-end checkout process validation
- Product sorting functionality
- Login validation (positive and negative scenarios)
- Price calculation verification

_API Testing (Postman):_

- RESTful API endpoint testing
- GET, POST, PUT, DELETE operations
- Authentication/login validation
- Positive and negative test scenarios
- Response time validation (delayed requests)
- Parameterized requests

### 2.1.3 Test Objectives

**UI Testing Objectives:**

- Verify critical user journeys work as expected
- Ensure price calculations are accurate
- Validate error handling for login failures
- Confirm product sorting functions correctly
- Establish a maintainable automated test suite using POM pattern

**API Testing Objectives:**

- Verify API endpoints respond correctly
- Validate request/response structure and data
- Test CRUD operations (Create, Read, Update, Delete)
- Validate authentication mechanisms
- Test error handling and negative scenarios
- Measure response times for delayed requests

---

## 2.2 Test Strategy

### 2.2.1 Testing Approach

**UI Testing:**

- **Tool:** Playwright v1.48+
- **Language:** JavaScript/Node.js
- **Design Pattern:** Page Object Model (POM)
- **Test Type:** End-to-End (E2E) functional testing
- **Execution:** Automated via command line / CI/CD pipeline
- **Browser:** Chromium (configurable)

**API Testing:**

- **Tool:** Postman / Newman
- **API Type:** RESTful API
- **Test Type:** Functional API testing
- **Execution:** Postman Collection / Newman command line
- **Response Format:** JSON

### 2.2.2 Test Design Pattern - Page Object Model

**Rationale for POM:**

- Improves test maintainability
- Reduces code duplication
- Separates test logic from page interactions
- Makes tests more readable and easier to update

**Implementation:**

- Each page of the application has a corresponding page class
- Page classes encapsulate element locators and page actions
- Tests use page objects to interact with the application
- Selectors are defined once in page objects

**Page Objects Created:**
| Page Object | Purpose |
|-------------|---------|
| `LoginPage` | Login page interactions and error validations |
| `InventoryPage` | Product listing, sorting, and cart operations |
| `CartPage` | Shopping cart validation and checkout navigation |
| `CheckoutPage` | Customer information form |
| `CheckoutOverviewPage` | Order summary and price calculations |
| `CheckoutCompletePage` | Order confirmation |

---

## 2.3 UI Test Cases

### 2.3.1 Test Case: UI-1 | Full Checkout and Final Price Validation

**Objective:** Verify complete checkout flow from login to order completion with price validation

**Priority:** High  
**Test Type:** End-to-End  
**File:** `checkout-flow.spec.js`

**Preconditions:**

- Application is accessible
- Valid test credentials available
- At least 2 products available in inventory

**Test Steps:**

| Step | Action                                                   | Expected Result                                           |
| ---- | -------------------------------------------------------- | --------------------------------------------------------- |
| 1    | Navigate to application and login with valid credentials | User successfully logged in, redirected to inventory page |
| 2    | Add at least 2 random products to cart                   | Products added, cart badge shows correct count            |
| 3    | Navigate to cart and verify items                        | All selected items displayed in cart                      |
| 4    | Proceed to checkout and fill customer information        | Form accepted, navigated to overview page                 |
| 5    | Verify price calculations (subtotal, tax, total)         | All prices calculated correctly, order completed          |

**Test Data:**

- Username: `standard_user`
- Password: `secret_sauce`
- Customer info: Random Dutch names and postal codes
- Products: Randomly selected (minimum 2, currently testing with 4)

**Pass Criteria:**

- User can complete full checkout flow
- Cart badge reflects correct item count
- All selected items appear in cart
- Subtotal = Sum of individual item prices
- Total = Subtotal + Tax
- Order completion confirmation displayed

---

### 2.3.2 Test Case: UI-2 | Product Sorting by Name (Z-A) Validation

**Objective:** Verify products can be sorted in reverse alphabetical order

**Priority:** Medium  
**Test Type:** Functional  
**File:** `sort-products.spec.js`

**Preconditions:**

- Application is accessible
- User can login successfully
- Multiple products exist in inventory

**Test Steps:**

| Step | Action                                                      | Expected Result           |
| ---- | ----------------------------------------------------------- | ------------------------- |
| 1    | Login to application                                        | Successfully logged in    |
| 2    | Select sort option "Name (Z to A)"                          | Products reordered        |
| 3    | Verify all products are in reverse alphabetical order       | Products sorted correctly |
| 4    | Verify first product is "Test.allTheThings() T-Shirt (Red)" | Correct product at top    |

**Test Data:**

- Username: `standard_user`
- Password: `secret_sauce`
- Sort option: Z-A (reverse alphabetical)

**Pass Criteria:**

- Products are displayed in reverse alphabetical order
- First product is "Test.allTheThings() T-Shirt (Red)"
- All products remain visible after sorting

---

### 2.3.3 Test Case: UI-3 | Failed Login Error Validation

**Objective:** Verify appropriate error messages for various login failure scenarios

**Priority:** High  
**Test Type:** Negative Testing  
**File:** `failed-login.spec.js`

**Preconditions:**

- Application is accessible
- Login page loads correctly

**Test Scenarios:**

| Scenario          | Username          | Password         | Expected Error Message                                        |
| ----------------- | ----------------- | ---------------- | ------------------------------------------------------------- |
| Invalid password  | `standard_user`   | `wrong_password` | "Username and password do not match any user in this service" |
| Locked out user   | `locked_out_user` | `secret_sauce`   | "Sorry, this user has been locked out"                        |
| Empty username    | (empty)           | `secret_sauce`   | "Username is required"                                        |
| Empty password    | `standard_user`   | (empty)          | "Password is required"                                        |
| Empty credentials | (empty)           | (empty)          | "Username is required"                                        |

**Pass Criteria:**

- Appropriate error message displayed for each scenario
- User remains on login page
- Login button still visible
- No navigation occurs on failed login

---

## 2.4 API Test Cases

**Base URL:** https://reqres.in/  
**Tool:** Postman  
**Collection:** SpriteCloud

### 2.4.1 Test Case: API-1 | Retrieve List of Users

**Objective:** Verify API returns a list of users

**Priority:** High  
**HTTP Method:** GET  
**Endpoint:** `/api/users?page=2`

**Test Steps:**

1. Send GET request to endpoint
2. Verify response status code is 200
3. Validate response body structure
4. Verify users array is present and populated

**Expected Response:**

```json
{
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [...]
}
```

**Pass Criteria:**

- Status code: 200 OK
- Response contains "data" array
- Each user object has: id, email, first_name, last_name, avatar

---

### 2.4.2 Test Case: API-2 | Successful Login

**Objective:** Verify successful login returns token

**Priority:** High  
**HTTP Method:** POST  
**Endpoint:** `/api/login`

**Request Body:**

```json
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

**Expected Response:**

```json
{
  "token": "QpwL5tke4Pnpja7X4"
}
```

**Pass Criteria:**

- Status code: 200 OK
- Response contains "token" field
- Token is not empty

---

### 2.4.3 Test Case: API-3 | Update User

**Objective:** Verify user data can be updated

**Priority:** Medium  
**HTTP Method:** PUT  
**Endpoint:** `/api/users/2`

**Request Body:**

```json
{
  "name": "morpheus",
  "job": "zion resident"
}
```

**Expected Response:**

```json
{
  "name": "morpheus",
  "job": "zion resident",
  "updatedAt": "2024-10-27T..."
}
```

**Pass Criteria:**

- Status code: 200 OK
- Response contains updated name and job
- Response includes "updatedAt" timestamp

---

### 2.4.4 Test Case: API-4 | Delete User

**Objective:** Verify user can be deleted

**Priority:** Medium  
**HTTP Method:** DELETE  
**Endpoint:** `/api/users/2`

**Pass Criteria:**

- Status code: 204 No Content
- No response body

---

### 2.4.5 Test Case: API-5 | Failed Login - Missing Password (Negative)

**Objective:** Verify proper error handling when password is missing

**Priority:** High  
**HTTP Method:** POST  
**Endpoint:** `/api/login`

**Request Body:**

```json
{
  "email": "eve.holt@reqres.in"
}
```

**Expected Response:**

```json
{
  "error": "Missing password"
}
```

**Pass Criteria:**

- Status code: 400 Bad Request
- Response contains error message
- Error message is "Missing password"

---

### 2.4.6 Test Case: API-6 | User Not Found (Negative)

**Objective:** Verify proper error handling for non-existent user

**Priority:** Medium  
**HTTP Method:** GET  
**Endpoint:** `/api/users/23`

**Expected Response:**

```json
{}
```

**Pass Criteria:**

- Status code: 404 Not Found
- Response body is empty object

---

### 2.4.7 Test Case: API-7 | Delayed Response

**Objective:** Verify delayed response functionality and measure response time

**Priority:** Low  
**HTTP Method:** GET  
**Endpoint:** `/api/users?delay=3`

**Test Steps:**

1. Send GET request with delay parameter
2. Measure response time
3. Verify response contains user data

**Pass Criteria:**

- Status code: 200 OK
- Response time is approximately 3 seconds (±500ms)
- Response contains valid user data
- Delay parameter is respected

---

## 2.5 Test Data

### 2.5.1 Test Users

| Username                  | Password       | Status | Purpose                                  |
| ------------------------- | -------------- | ------ | ---------------------------------------- |
| `standard_user`           | `secret_sauce` | Active | Primary test user for positive scenarios |
| `locked_out_user`         | `secret_sauce` | Locked | Testing locked account error handling    |
| `problem_user`            | `secret_sauce` | Active | Available for edge case testing          |
| `performance_glitch_user` | `secret_sauce` | Active | Available for performance testing        |
| `error_user`              | `secret_sauce` | Active | Available for error scenario testing     |
| `visual_user`             | `secret_sauce` | Active | Available for visual testing             |

### 2.5.2 UI Test Data Generation

**Customer Information:**

- Dutch first names: Random selection from 30 common Dutch first names
- Dutch last names: Random selection from 30 common Dutch surnames
- Postal codes: Generated in valid Dutch format (1234AB)

**Rationale:** Using Dutch data demonstrates international customer support and realistic test data variety.

**Product Selection:**

- Products selected randomly during test execution
- Minimum 2 products for checkout flow (currently 4 for thorough testing)
- Ensures tests work with any product combination

### 2.5.3 API Test Data

**Test Users (ReqRes API):**
| Email | Password | Purpose |
|-------|----------|---------|
| `eve.holt@reqres.in` | `cityslicka` | Valid login credentials |
| `peter@klaven` | (no password) | Missing password test |

**Test Endpoints:**

- User ID 2: Standard test user for update/delete operations
- User ID 23: Non-existent user for 404 testing
- Page 2: User list retrieval

---

## 2.6 Test Environment

### 2.6.1 UI Application Under Test

- **URL:** https://www.saucedemo.com
- **Type:** Web application
- **Environment:** Production/Demo

### 2.6.2 API Application Under Test

- **Base URL:** https://reqres.in/
- **Type:** RESTful API
- **Environment:** Production/Demo
- **Response Format:** JSON

### 2.6.3 Test Execution Environment

**UI Tests:**

- **Operating System:** Cross-platform (macOS, Windows, Linux)
- **Node.js Version:** v16 or higher
- **Browser:** Chromium (default), configurable for Firefox and WebKit
- **Test Framework:** Playwright v1.48+

**API Tests:**

- **Tool:** Postman / Newman
- **Operating System:** Cross-platform
- **Collection:** SpriteCloud
- **Export Format:** Postman Collection v2.1

### 2.6.4 Test Data Storage

**UI Tests:**

- Test credentials: Hard-coded in test files
- Customer data: Generated at runtime
- Product selection: Random at runtime

**API Tests:**

- Test data: Stored in Postman environment variables
- Request bodies: Defined in Postman collection
- Expected responses: Validated via Postman tests

---

## 2.7 Entry & Exit Criteria

### 2.7.1 Entry Criteria

**UI Tests:**

- ✅ Playwright framework installed and configured
- ✅ Sauce Demo application is accessible
- ✅ Page objects implemented
- ✅ Test cases written and reviewed
- ✅ Test data prepared

**API Tests:**

- ✅ Postman installed and configured
- ✅ ReqRes API is accessible
- ✅ Postman collection created
- ✅ Test cases defined with assertions
- ✅ Environment variables configured

### 2.7.2 Exit Criteria

**UI Tests:**

- ✅ All 11 UI test cases executed
- ✅ 100% pass rate for critical tests (UI-1, UI-3)
- ✅ Test report generated
- ✅ No critical bugs blocking main user flows
- ✅ Test artifacts saved (screenshots, videos, traces)

**API Tests:**

- ✅ All 7 API test cases executed
- ✅ 100% pass rate for CRUD operations
- ✅ Postman test results exported
- ✅ Response times validated for delayed requests
- ✅ Negative scenarios properly validated

---

## 2.8 Test Execution

### 2.8.1 Local Environment Setup

```bash
# 1. Verify Node.js version (must be >=18)
node --version

# 2. Clone repository
git clone https://github.com/PGruszko/spriteCloud-test-automation.git
cd spriteCloud-test-automation

# 3. Install Node.js dependencies
npm install

# 4. Install Playwright browsers
npx playwright install

# 5. Run api and ui tests
npm run run-all-tests
```

### 2.8.2 UI Test Execution Commands

```bash
# Run all UI tests
npm run run-ui-tests
```

### 2.8.3 API Test Execution

**Via Postman:**

1. Open Postman
2. Import collection "SpriteCloud"
3. Click "Run Collection"
4. View test results in runner

**Via Newman (Command Line):**

```bash
# Run all API tests
npm run run-api-tests
```

### 2.8.4 Test Reporting

**UI Tests:**

- **HTML Report:** Generated automatically after test execution
- **Console Output:** Real-time test results during execution
- **Screenshots:** Captured on test failure
- **Videos:** Recorded for failed tests
- **Trace Files:** Detailed execution traces for debugging

```bash
# Generate UI test report with Playwright
npm run generate-ui-test-report
```

It will open a new tab in your browser with the report

**API Tests:**

- **Postman Report:** Built-in test results in Collection Runner
- **Newman Report:** HTML/JSON reports via Newman CLI
- **Response Times:** Measured and displayed for each request
- **Test Assertions:** Pass/Fail status for each test

```bash
# Generate API test report with Newman reporter
npm run generate-api-test-report
```

Navigate in your project to the "newman" folder and open with your browser the generated HTML file

---

## 2.9 Risks & Mitigation

### 2.9.1 Identified Risks

| Risk                        | Impact | Probability | Mitigation Strategy                                                  |
| --------------------------- | ------ | ----------- | -------------------------------------------------------------------- |
| UI application downtime     | High   | Low         | Implement retry logic, run tests in staging environment              |
| API endpoint unavailability | High   | Low         | Monitor API status, implement health checks                          |
| UI selector changes         | Medium | Medium      | Use Page Object Model, prefer data-test attributes                   |
| API contract changes        | Medium | Low         | Version API endpoints, maintain API documentation                    |
| Test data conflicts         | Low    | Low         | Use unique/random data for each test run                             |
| Flaky tests                 | Medium | Medium      | Use Playwright's built-in wait strategies, avoid hard-coded timeouts |
| Network latency             | Low    | Medium      | Set appropriate timeouts, test in stable network                     |

### 2.9.2 Dependencies

**UI Tests:**

- Sauce Demo application availability (saucedemo.com)
- Network connectivity
- Browser drivers (automatically managed by Playwright)
- Node.js runtime environment

**API Tests:**

- ReqRes API availability (reqres.in)
- Network connectivity
- Postman application or Newman CLI
- Valid API endpoints

---

## 2.10 Defect Management

### 2.10.1 Defect Reporting

- **Tool:** GitHub Issues / Jira / Bug tracking system
- **Severity Levels:**
  - **Critical:** Blocks main user flows or API endpoints return 500 errors
  - **High:** Major functionality broken (e.g., incorrect price calculation, wrong API response)
  - **Medium:** Feature not working as expected (e.g., sorting incorrect, API missing field)
  - **Low:** Minor UI issues, cosmetic problems, documentation issues

### 2.10.2 Defect Lifecycle

1. Test fails → Investigate root cause
2. Verify if application bug or test issue
3. If application bug → Create defect ticket with details
4. If test issue → Fix test and re-run
5. Track defect to resolution
6. Verify fix and update test if needed

---

## 2.11 Test Maintenance

### 2.11.1 Maintenance Strategy

- **Regular Reviews:** Review tests monthly or when application changes
- **Refactoring:** Update page objects when UI changes
- **Test Data Updates:** Refresh test data as needed
- **Documentation:** Keep test plan and documentation current

### 2.11.2 Version Control

- All test code stored in Git repository
- Commit messages follow conventional format
- Branch strategy: feature branches for new tests
- Code reviews before merging

### 2.11.3 Continuous Improvement

- Monitor test execution time
- Identify and fix flaky tests
- Add new tests for new features
- Remove obsolete tests
- Update best practices based on learnings

---

## 2.12 Success Metrics

### 2.12.1 Test Coverage

- **User Flows Covered:** 3 critical flows (login, checkout, sorting)
- **Test Cases:** 11 automated tests
- **Page Objects:** 6 page classes
- **Pass Rate Target:** 100% for stable tests

### 2.12.2 Quality Metrics

- **Execution Time:** < 20 seconds for full suite
- **Maintainability:** POM pattern enables easy updates
- **Reliability:** Tests should pass consistently (< 1% flakiness)
- **Documentation:** All page objects include JSDoc comments

---

## 2.13 Appendix

### 2.13.1 References

**UI Testing:**

- Playwright Documentation: https://playwright.dev/
- Sauce Demo Application: https://www.saucedemo.com/

**API Testing:**

- ReqRes API: https://reqres.in/
- Postman Documentation: https://learning.postman.com/

### 2.13.2 Glossary

- **POM:** Page Object Model
- **E2E:** End-to-End
- **UI:** User Interface
- **AUT:** Application Under Test

### 2.13.3 Test Artifacts

**UI Tests:**

- Test files: `checkout-flow.spec.js`, `sort-products.spec.js`, `failed-login.spec.js`
- Page objects: Located in `pages/` directory
- Configuration: `playwright.config.js`
- Reports: HTML reports in `playwright-report/`

**API Tests:**

- Postman Collection: `SpriteCloud.postman_collection.json`
- Environment file: `environment.json`
- Test results: Exported from Postman Collection Runner

### 2.13.4 Document History

| Version | Date         | Author      | Changes                    |
| ------- | ------------ | ----------- | -------------------------- |
| 1.0     | October 2025 | QA Engineer | Initial test plan creation |
| 1.1     | October 2025 | QA Engineer | Added API testing section  |

---

# 3. UI Testing Documentation

## 3.1 Overview

This project contains automated UI tests for [Sauce Demo](https://www.saucedemo.com), implementing the following test cases:

- **Test Case: UI-1** | Full Checkout and Final Price Validation
- **Test Case: UI-2** | Product Sorting by Name (Z-A) Validation
- **Test Case: UI-3** | Failed Login Error Validation

---

## 3.2 Test Credentials

Valid user:

- Username: `standard_user`
- Password: `secret_sauce`

Other available users: `problem_user`, `performance_glitch_user`, `error_user`, `visual_user`

Locked user (for negative testing):

- Username: `locked_out_user`
- Password: `secret_sauce`

---

## 3.3 Test Cases Implementation

### 3.3.1 Test Case: UI-1 - Complete Checkout Flow

**File:** `checkout-flow.spec.js`

- **Test 1**: Login - Navigate and login with standard user
- **Test 2**: Add 4 random items to cart - Verify cart badge shows correct count
- **Test 3**: View cart & proceed to checkout - Validate items and navigate to checkout
- **Test 4**: Fill checkout information - Uses random Dutch names and postal codes
- **Test 5**: Verify prices & complete order - Validates subtotal, tax, and total calculations

Note: Tests run serially to maintain the logged-in session state across steps.

### 3.3.2 Test Case: UI-2 - Product Sorting

**File:** `sort-products.spec.js`

- **Test 1**: Login to application
- **Test 2**: Sort products by Name (Z → A)
- **Test 3**: Validate all products are in reverse alphabetical order
- **Test 4**: Verify first product is "Test.allTheThings() T-Shirt (Red)"

### 3.3.3 Test Case: UI-3 - Failed Login Validation

**File:** `failed-login.spec.js`

- **Test 1**: Invalid password - Error message displayed
- **Test 2**: Locked out user - Specific error for locked account
- **Test 3**: Empty username - Username required error
- **Test 4**: Empty password - Password required error
- **Test 5**: Empty credentials - Both fields empty validation

---

## 3.4 Page Object Model

This project uses the Page Object Model (POM) design pattern. Each page of the application has its own class that encapsulates the page elements and actions.

| Page Object            | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `LoginPage`            | Login page interactions and validations       |
| `InventoryPage`        | Product listing, sorting, and cart operations |
| `CartPage`             | Shopping cart validation and checkout         |
| `CheckoutPage`         | Customer information form                     |
| `CheckoutOverviewPage` | Order summary and price validation            |
| `CheckoutCompletePage` | Order confirmation                            |

---

## 3.5 Features

- Page Object Model design pattern for maintainability
- Web-first assertions (`toBeVisible()`, `toHaveText()`, `toHaveCount()`)
- Data-test attributes for reliable selectors
- Random data generation (Dutch names and postal codes)
- Price validation with mathematical verification
- Serial test execution for checkout flow to maintain session
- Screenshots and videos on test failure
- JSDoc documentation for page object methods

---

## 3.7 Tools & Technologies

**Testing Framework:**

- Playwright v1.48+ - Modern end-to-end testing framework
- Node.js v16+ - JavaScript runtime

**Design Pattern:**

- Page Object Model (POM) - Maintainable test architecture

**Additional Tools:**

- JSDoc - Method documentation
- Git - Version control

**Documentation:**

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

---

## 3.8 AI Usage

AI assistance was used for the following tasks:

- **Code refactoring**: Restructuring initial tests into Page Object Model pattern
- **Page object creation**: Supporting creation of reusable page classes with proper encapsulation
- **Documentation**: Writing JSDoc comments and README documentation
- **Code review**: Suggestions for best practices and improvements

All test logic, validations, and business requirements were implemented based on the assignment specifications. AI was used as a productivity tool for structure and documentation, not for core test case implementation.

---

# 4. API Testing Documentation

## 4.1 Overview

This project contains automated API tests for [ReqRes](https://reqres.in/) using Postman, implementing the following test cases:

- **Test Case: API-1** | Retrieve List of Users
- **Test Case: API-2** | Successful Login
- **Test Case: API-3** | Update User
- **Test Case: API-4** | Delete User
- **Test Case: API-5** | Failed Login - Missing Password (Negative)
- **Test Case: API-6** | User Not Found (Negative)
- **Test Case: API-7** | Delayed Response Validation

---

## 4.2 API Information

**Base URL:** `https://reqres.in/`  
**API Type:** RESTful API  
**Response Format:** JSON  
**Authentication:** Token-based (for login endpoints)

---

## 4.3 Test Credentials

**Valid Login:**

- Email: `eve.holt@reqres.in`
- Password: `cityslicka`

**Invalid Login (Negative Testing):**

- Email: `peter@klaven`
- Password: (missing/empty)

**Test Resources:**

- User ID 2: Standard test user for update/delete operations
- User ID 23: Non-existent user for 404 testing
- Page 2: User list retrieval

---

## 4.4 Test Cases Implementation

### 4.4.1 Test Case: API-1 - Retrieve List of Users

**HTTP Method:** GET  
**Endpoint:** `/api/users?page=2`

**Request:** No body required

**Expected Response:**

```json
{
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    }
  ]
}
```

**Validations:**

- Status code: 200 OK
- Response contains "data" array
- Each user has: id, email, first_name, last_name, avatar
- Page number matches request parameter

---

### 4.4.2 Test Case: API-2 - Successful Login

**HTTP Method:** POST  
**Endpoint:** `/api/login`

**Request Body:**

```json
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

**Expected Response:**

```json
{
  "token": "QpwL5tke4Pnpja7X4"
}
```

**Validations:**

- Status code: 200 OK
- Response contains "token" field
- Token is not empty string
- Token format is valid

---

### 4.4.3 Test Case: API-3 - Update User

**HTTP Method:** PUT  
**Endpoint:** `/api/users/2`

**Request Body:**

```json
{
  "name": "morpheus",
  "job": "zion resident"
}
```

**Expected Response:**

```json
{
  "name": "morpheus",
  "job": "zion resident",
  "updatedAt": "2024-10-27T12:34:56.789Z"
}
```

**Validations:**

- Status code: 200 OK
- Response contains updated "name" field
- Response contains updated "job" field
- Response includes "updatedAt" timestamp
- Timestamp is in ISO 8601 format

---

### 4.4.4 Test Case: API-4 - Delete User

**HTTP Method:** DELETE  
**Endpoint:** `/api/users/2`

**Request:** No body required

**Expected Response:** No content (empty body)

**Validations:**

- Status code: 204 No Content
- Response body is empty
- No error returned

---

### 4.4.5 Test Case: API-5 - Failed Login (Missing Password)

**HTTP Method:** POST  
**Endpoint:** `/api/login`

**Request Body:**

```json
{
  "email": "eve.holt@reqres.in"
}
```

**Expected Response:**

```json
{
  "error": "Missing password"
}
```

**Validations:**

- Status code: 400 Bad Request
- Response contains "error" field
- Error message is "Missing password"
- No token returned

---

### 4.4.6 Test Case: API-6 - User Not Found

**HTTP Method:** GET  
**Endpoint:** `/api/users/23`

**Request:** No body required

**Expected Response:**

```json
{}
```

**Validations:**

- Status code: 404 Not Found
- Response body is empty object
- No user data returned

---

### 4.4.7 Test Case: API-7 - Delayed Response

**HTTP Method:** GET  
**Endpoint:** `/api/users?delay=3`

**Request:** No body required

**Expected Response:** Same as API-1 (user list)

**Validations:**

- Status code: 200 OK
- Response contains user data
- Response time is approximately 3 seconds (±500ms)
- Delay parameter is respected
- Data structure is correct despite delay

---

## 4.5 Features

**Testing Capabilities:**

- RESTful API testing (GET, POST, PUT, DELETE)
- Request/response validation
- JSON schema validation
- Status code verification
- Response time measurement
- Positive and negative test scenarios
- Error handling validation

**Test Assertions:**

- Status code validation
- Response body structure checks
- Field presence and type validation
- Error message verification
- Response time thresholds
- Data integrity checks

**Best Practices:**

- Descriptive test names
- Comprehensive assertions
- Reusable test scripts
- Environment variables for flexibility
- Clear documentation

---

## 4.6 Running Tests

### 4.6.1 Via Postman Application

**Prerequisites:**

- Postman installed (Desktop or Web)

**Steps:**

1. Open Postman
2. Click "Import" in the top left
3. Select `SpriteCloud.postman_collection.json`
4. Click "Collections" in left sidebar
5. Click "Run" button on the collection
6. Click "Run SpriteCloud" to execute all tests
7. View results in the Collection Runner

**Manual Testing:**

- Click individual requests to view details
- Click "Send" to execute single request
- View response in the bottom panel
- Check "Test Results" tab for assertions

---

### 4.6.2 Via Newman (Command Line)

**Prerequisites:**

- Node.js v16 or higher
- npm

**Install Newman:**

```bash
npm install -g newman
```

**Run collection:**

```bash
# Basic run
newman run SpriteCloud.postman_collection.json

# With environment file
newman run SpriteCloud.postman_collection.json -e environment.json

# Generate HTML report
newman run SpriteCloud.postman_collection.json -r html

# Generate HTML report with custom name
newman run SpriteCloud.postman_collection.json -r html --reporter-html-export api-test-report.html

# Run with detailed output
newman run SpriteCloud.postman_collection.json --verbose

# Set delay between requests
newman run SpriteCloud.postman_collection.json --delay-request 500
```

---

## 4.7 Test Reports

### 4.7.1 Postman Collection Runner

- Real-time test execution results
- Pass/Fail status for each test
- Response times displayed
- Detailed error messages
- Visual summary of test run

### 4.7.2 Newman HTML Report

- Comprehensive test results
- Request/response details
- Execution timeline
- Pass/fail statistics
- Response time graphs
- Export and share functionality

**Sample Report Metrics:**

- Total Requests: 7
- Test Cases Passed: 7
- Test Cases Failed: 0
- Average Response Time: ~1-2 seconds
- Total Duration: ~10-15 seconds

---

## 4.8 Tools & Technologies

**API Testing:**

- **Postman** - API development and testing platform
- **Newman** - Command-line collection runner for Postman
- **Node.js** - Runtime for Newman

**API Details:**

- **Protocol:** HTTPS
- **Format:** JSON
- **API Type:** RESTful
- **Authentication:** Token-based

**Validation:**

- JSON schema validation
- Status code assertions
- Response time checks
- Data type verification

**Documentation:**

- [Postman Documentation](https://learning.postman.com/)
- [Newman Documentation](https://github.com/postmanlabs/newman)
- [ReqRes API](https://reqres.in/)

---

## 4.9 Response Time Benchmarks

| Test Case           | Expected Time | Tolerance |
| ------------------- | ------------- | --------- |
| API-1: Get Users    | < 500ms       | Normal    |
| API-2: Login        | < 500ms       | Normal    |
| API-3: Update       | < 500ms       | Normal    |
| API-4: Delete       | < 500ms       | Normal    |
| API-5: Failed Login | < 500ms       | Normal    |
| API-6: Not Found    | < 500ms       | Normal    |
| API-7: Delayed      | ~3000ms       | ±500ms    |

---

## 4.10 Test Coverage Summary

**CRUD Operations:**

- ✅ Create: Not tested (POST user endpoint behavior varies)
- ✅ Read: GET user list, GET single user
- ✅ Update: PUT user data
- ✅ Delete: DELETE user

**Authentication:**

- ✅ Successful login with valid credentials
- ✅ Failed login with missing password

**Error Handling:**

- ✅ 400 Bad Request (missing fields)
- ✅ 404 Not Found (invalid resource)

**Performance:**

- ✅ Delayed response validation
- ✅ Response time measurement

---

## 4.11 AI Usage

AI assistance was used for the following tasks:

- **Test documentation**: Supporting creation of comprehensive API test documentation
- **Test organization**: Structuring test cases in logical order
- **Documentation formatting**: Markdown formatting and examples
- **Best practices**: Suggestions for API testing best practices

All API test cases, request/response validations, and assertions were implemented based on the assignment specifications. AI was used as a productivity tool for documentation and structure, not for core test implementation.

---

**Collection:** SpriteCloud  
**Total Tests:** 7  
**Last Updated:** October 2025  
**Status:** All tests passing
