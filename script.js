// Github Pages側のコード例 (JS)

const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxWjyCVYUZsBjqi0Ge2x4cp0_tNgeTxEHVOAqMKx_WNJlm0AUVXCTWVVkCsBt8yxl7z/exec';

async function fetchSettingsFromGAS() {
  try {
    // GASのURLにGETリクエストを送信
    const response = await fetch(GAS_WEB_APP_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const jsonResponse = await response.json();
    
    if (jsonResponse.status === 'success') {
      console.log('取得した設定データ:', jsonResponse.data);
      // ここで取得したデータをアプリの状態(State)にセットしたり、
      // ルールとして適用する処理を書きます。
      return jsonResponse.data;
    } else {
      console.error('GAS側エラー:', jsonResponse.message);
    }
  } catch (error) {
    console.error('通信エラー:', error);
  }
}

// 実行
fetchSettingsFromGAS();
