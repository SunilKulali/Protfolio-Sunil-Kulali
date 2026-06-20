import { chatKnowledge, profile, projects, skills, experience, education, certifications } from '../data/resumeData';

function scoreMatch(query, keywords) {
  const q = query.toLowerCase();
  let score = 0;
  for (const kw of keywords) {
    const k = kw.toLowerCase();
    if (q.includes(k)) score += k.length;
    else if (k.split(' ').some((word) => word.length > 3 && q.includes(word))) score += 2;
  }
  return score;
}

export function getChatResponse(userMessage) {
  const query = userMessage.trim().toLowerCase();
  if (!query) return "Please type a question and I'll answer based on Sunil's resume.";

  let best = { score: 0, answer: null };
  for (const item of chatKnowledge) {
    const score = scoreMatch(query, item.keywords);
    if (score > best.score) best = { score, answer: item.answer };
  }

  if (best.score >= 3) return best.answer;

  if (query.includes('how many project')) {
    return `Sunil has ${projects.length} featured projects across Data Analysis, Business Analysis, Data Engineering, and SQL Development.`;
  }

  if (query.includes('linkedin')) {
    return `Sunil's LinkedIn: ${profile.linkedin}`;
  }

  if (query.includes('github')) {
    return `Sunil's GitHub: ${profile.github} — check out his repositories for ML, SQL, and dashboard projects!`;
  }

  if (query.includes('phone') || query.includes('number')) {
    return `Sunil's phone number is ${profile.phone}.`;
  }

  const projectMatch = projects.find((p) => query.includes(p.title.toLowerCase().split(' ')[0]));
  if (projectMatch) {
    return `${projectMatch.title}: ${projectMatch.description}\n\nTech: ${projectMatch.tech.join(', ')}${projectMatch.link !== '#' ? `\n\nLink: ${projectMatch.link}` : ''}`;
  }

  const allSkills = Object.values(skills).flat().flatMap((s) => s.tags);
  const matchedSkill = allSkills.find((t) => query.includes(t.toLowerCase()));
  if (matchedSkill) {
    return `Yes! Sunil has experience with ${matchedSkill}. It's part of his technical toolkit across data analysis, BI, and engineering projects.`;
  }

  if (best.score > 0) return best.answer;

  return `I couldn't find a specific match, but here's a quick overview:\n\n${profile.summary}\n\nTry asking about skills, projects, experience, education, certifications, or contact details!`;
}

export const suggestedQuestions = [
  'What are your skills?',
  'Tell me about your projects',
  'Work experience?',
  'Education background',
  'How to contact you?',
];
