# Playwright Testing Project

This repository contains automated tests written with Playwright for various web applications.

## Project Structure

- `tests/`: Contains all test files
  - `June6/`: Activity files for the June 6 session
  - `mock-apis/`: Tests for API mocking
  - `test-isolation/`: Tests demonstrating test isolation techniques
  - `auto-retrying/`: Tests for auto-retrying functionality
  - `dynamic-form/`: Tests for dynamic form interactions

## Getting Started

### Prerequisites

- Node.js 14 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/DiosDVito/Testing.git

# Navigate to the project directory
cd Testing

# Install dependencies
npm install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test
npx playwright test tests/June6/activity2-video-recording.spec.ts

# Run with specific configuration
npx playwright test tests/June6/activity2-video-recording.spec.ts --config=tests/June6/playwright.config.ts

# Run with UI mode
npx playwright test --ui
```

## Activities

- **Activity 1**: Parameterized login tests
- **Activity 2**: Video recording tests
- **Activity 3**: Test generation with Playwright Codegen
- **Activity 4**: Test generation with Playwright Inspector

## License

This project is available for educational purposes. 