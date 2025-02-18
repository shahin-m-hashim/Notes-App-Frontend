// Getters
export function getQueryParam(key = "") {
  if (!key) return null;
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(key);
}

export function getQueryParams(keys = []) {
  if (!Array.isArray(keys)) return {};

  const queryParams = {};
  const existingQueryParams = new URLSearchParams(window.location.search);
  keys.forEach((key) => {
    if (key) queryParams[key] = existingQueryParams.get(key);
  });
  return queryParams || {};
}

export function getAllQueryParams() {
  const queryParams = {};
  const existingQueryParams = new URLSearchParams(window.location.search);
  existingQueryParams.forEach((value, key) => {
    if (value) queryParams[key] = value;
  });
  return queryParams || {};
}

// Setters
export function setQueryParam(key = "", value = "") {
  if (!key || value === undefined || value === null) return;
  const queryParams = new URLSearchParams(window.location.search);

  if (value === "") {
    queryParams.delete(key);
  } else {
    queryParams.set(key, value);
  }

  return queryParams || {};
}

export function setQueryParams(params = []) {
  if (!params || typeof params !== "object") return;

  const queryParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (key && (value || value === "")) {
      if (value === "") {
        queryParams.delete(key);
      } else {
        queryParams.set(key, value);
      }
    } else {
      queryParams.delete(key);
    }
  });

  return queryParams || {};
}

// Removers
export function removeQueryParam(key = "") {
  if (!key) return;

  const queryParams = new URLSearchParams(window.location.search);
  queryParams.delete(key);

  return queryParams || {};
}

export function removeQueryParams(keys = []) {
  if (!Array.isArray(keys)) return;

  const queryParams = new URLSearchParams(window.location.search);
  keys.forEach((key) => {
    if (key) queryParams.delete(key);
  });

  return queryParams || {};
}

export function clearQueryParams() {
  const queryParams = new URLSearchParams();
  return queryParams || {};
}
