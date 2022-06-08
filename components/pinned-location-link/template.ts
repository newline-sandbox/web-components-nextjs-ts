export interface TemplateProps {
  placeName?: string;
  address?: string;
  generalSearchTerms?: string;
  className?: string;
}

// https://developers.google.com/maps/documentation/urls/get-started#search-action
const template = (props: TemplateProps) => {
  const { placeName, address, generalSearchTerms, className = "" } = props;

  const query = placeName || address || generalSearchTerms || "";

  return `
    <a class="${className}" target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}">
      <!-- SVG Icon From Heroicons - https://heroicons.com/ -->
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" style="vertical-align: middle;" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span style="vertical-align: middle;">${query}</span>
    </a>
  `;
};

export default template;
