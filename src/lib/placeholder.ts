export function getInitials(title: string): string {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}

export function placeholderImage(title: string): string {
  const initials = getInitials(title);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <rect width="600" height="400" fill="#3776ab"/>
  <text x="300" y="200" font-family="Inter, sans-serif" font-size="140" font-weight="600" fill="#ffe873" text-anchor="middle" dominant-baseline="central">${initials}</text>
</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
