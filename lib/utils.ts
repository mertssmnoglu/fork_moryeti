import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// generated by shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// created by chatgpt
export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}

// created by chatgpt
export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${time} - ${formattedDate}`;
}

// created by chatgpt
export function formatThreadCount(count: number): string {
  if (count === 0) {
    return "No Threads";
  } else {
    const threadCount = count.toString().padStart(2, "0");
    const threadWord = count === 1 ? "Thread" : "Threads";
    return `${threadCount} ${threadWord}`;
  }
}

export function formatThreadContent(sentence: string, limit: number) {
  if (sentence.length <= limit) {
    return sentence;
  }
  let truncatedSentence = sentence.slice(0, limit + 1).trim();
  const lastSpaceIndex = truncatedSentence.lastIndexOf(" ");

  if (lastSpaceIndex !== -1) {
    truncatedSentence = truncatedSentence.slice(0, lastSpaceIndex);
  }

  return truncatedSentence;
}

export function getAuthorName(userType: string, authorName: string) {
  switch (userType) {
    case "owner":
      return authorName;
    case "replier":
      return "Anonymous";
    case "asker":
      return "Questioner";

    default:
      break;
  }
}

export const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);