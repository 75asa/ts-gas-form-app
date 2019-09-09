import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import { isConditionalExpression } from "typescript";

interface Conditions {
  text: string;
  title: string;
  title_link: string;
}

function sendSlack(conditions: Conditions) {
  const url = PropertiesService.getScriptProperties().getProperty(
    "WEB_HOOK_URL"
  );
  const data = {
    attachments: [
      {
        color: "#d9204",
        text: conditions.text,
        title: conditions.title,
        title_link: conditions.title_link
      }
    ],
    channel: "#通知テストチャンネル",
    username: "test"
  };
  const payload = JSON.stringify(data);
  let options: URLFetchRequestOptions;
  options = {
    contentType: "application/json",
    method: "post",
    payload
  };

  UrlFetchApp.fetch(url, options);
}
