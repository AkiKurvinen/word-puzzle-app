import { test, expect } from '@playwright/test';
import {test_quiz} from './test_data';

const API_URL = 'http://localhost:8000';
const APP_URL = 'http://localhost:4200/';

test.describe('Quiz API CREATE, UPDATE and DELETE', () => {
  test('create, update, and show quiz in list', async ({ request, page }) => {
    // Create quiz
    const createRes = await request.post(`${API_URL}/quiz/testquiz/submit`, {
      data: { meta: test_quiz.meta }
    });
    expect(createRes.ok() || createRes.status() === 400).toBeTruthy(); // 400 if already exists

    // Add question
    const putRes = await request.put(`${API_URL}/quiz/testquiz`, {
      data: test_quiz.questions[0],
    });
    expect(putRes.ok()).toBeTruthy();

    // Now check UI
    await page.goto(APP_URL);
    const quizLocator = page.locator('text=testquiz');
    await expect(quizLocator).toBeVisible();
    await quizLocator.click();

    // Click the correct option (Playwright)
    const correctOption = page.locator('[data-test-id="option-item-label"]', { hasText: 'Playwright' });
    await expect(correctOption).toBeVisible();
    await correctOption.click();

    // Check for 'Quiz ended' message
    await expect(page.locator('text=Quiz ended')).toBeVisible();
    
  });

  test.afterAll(async ({ request }) => {
    const deleteRes = await request.delete(`${API_URL}/quiz/testquiz`);
    expect([200, 404]).toContain(deleteRes.status());
  });
});

