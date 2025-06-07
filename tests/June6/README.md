# June 6 Activities

## Activity 1: Parameterize Login tests
- Run with: `npx playwright test tests/June6/activity1-parameterized-login.spec.ts`
- This test uses a data-driven approach to test different login scenarios on GitHub.
- Each test case uses a different username/password combination and verifies the appropriate error message.

## Activity 2: Record a Video
- Make sure your weather.html server is running on port 59368
- Run with: `npx playwright test tests/June6/activity2-video-recording.spec.ts --config=tests/June6/playwright.config.ts`
- This will run tests against the weather app and record videos
- Find videos in: `tests/June6/test-results`

## Activity 3: Generate a test with Playwright Codegen in VS Code
- Use the VS Code Playwright extension to record a test
- Click "Record new" and navigate to GitHub
- Record interactions with task lists
- Copy the generated code to `tests/June6/activity3-codegen.spec.ts`
- Run with: `npx playwright test tests/June6/activity3-codegen.spec.ts`

## Activity 4: Generate a test with Playwright Inspector
- Run with: `npx playwright test tests/June6/activity4-inspector.spec.ts --debug`
- This will open the Playwright Inspector
- Navigate to Mercado Libre and record your interactions
- Add assertions as needed
- Copy the final code back to `tests/June6/activity4-inspector.spec.ts` 