import { useState, useEffect } from "react";

const menuData = {
  치킨: {
    emoji: "🍗", color: "#FF6B35", group: "식사",
    items: [
      { brand: "자담치킨", menu: "불패치킨" },
      { brand: "BHC", menu: "뿌링클" },
      { brand: "BHC", menu: "치즈볼" },
      { brand: "60계치킨", menu: "쯔란치킨" },
      { brand: "60계치킨", menu: "크랑이치킨" },
      { brand: "BBQ", menu: "자메이카 통다리구이" },
      { brand: "BBQ", menu: "뿜치킨" },
      { brand: "푸라닭", menu: "일품깐풍" },
      { brand: "푸라닭", menu: "마요피뇨" },
      { brand: "처갓집", menu: "슈프림 양념치킨" },
      { brand: "맘스터치", menu: "핫치즈순살" },
      { brand: "노랑통닭", menu: "뿌리노랑" },
      { brand: "지코바", menu: "지코바치킨" },
      { brand: "기영이 숯불두마리치킨", menu: "분모자" },
      { brand: "기영이 숯불두마리치킨", menu: "돼껍" },
      { brand: "네네치킨", menu: "스노윙치즈" },
    ],
  },
  떡볶이: {
    emoji: "🌶️", color: "#E63946", group: "식사",
    items: [
      { brand: "엽떡", menu: "마라로제 (콘마요)" },
      { brand: "엽떡", menu: "마라엽떡" },
      { brand: "엽떡", menu: "국물닭발" },
      { brand: "엽떡", menu: "무뼈닭발" },
      { brand: "엽떡", menu: "엽닭" },
      { brand: "삼첩분식", menu: "바질 크림 떡볶이" },
      { brand: "삼첩분식", menu: "마라로제 떡볶이" },
      { brand: "배떡", menu: "로제떡볶이" },
      { brand: "배떡", menu: "새우크림떡볶이" },
      { brand: "배떡", menu: "날치알주먹밥" },
      { brand: "응떡", menu: "크림카레 떡볶이" },
      { brand: "명랑핫도그", menu: "라이스페이퍼떡볶이" },
    ],
  },
  피자: {
    emoji: "🍕", color: "#F4A261", group: "식사",
    items: [
      { brand: "프레드 피자", menu: "레드콘리타" },
      { brand: "프레드 피자", menu: "쉬림플렉스" },
      { brand: "노모어피자", menu: "옥수수 새우 피자" },
      { brand: "노모어피자", menu: "바질 마스카포네 뇨끼" },
      { brand: "도미노피자", menu: "포테이토 피자 (엣지치즈+마요)" },
      { brand: "청년피자", menu: "허니비 피자 (마요추가)" },
      { brand: "피자스쿨", menu: "까르보네 피자" },
      { brand: "피자스쿨", menu: "오지치즈포테이토피자" },
    ],
  },
  햄버거: {
    emoji: "🍔", color: "#8B5E3C", group: "식사",
    items: [
      { brand: "프랭크버거", menu: "프랭크버거" },
      { brand: "프랭크버거", menu: "머쉬룸버거" },
      { brand: "프랭크버거", menu: "베이컨치즈버거" },
      { brand: "프랭크버거", menu: "핫불고기버거" },
      { brand: "프랭크버거", menu: "쉬림프버거" },
      { brand: "프랭크버거", menu: "어니언탑비프버거" },
      { brand: "프랭크버거", menu: "해쉬비프버거" },
    ],
  },
  한식: {
    emoji: "🥘", color: "#2A9D8F", group: "식사",
    items: [
      { brand: "", menu: "곱도리탕" },
      { brand: "", menu: "육회바른연어" },
      { brand: "", menu: "닭발" },
      { brand: "", menu: "보쌈" },
      { brand: "", menu: "불족발" },
      { brand: "", menu: "곱창" },
      { brand: "", menu: "숯불막창" },
      { brand: "", menu: "냉면" },
      { brand: "", menu: "방어" },
      { brand: "", menu: "마라 두루치기" },
      { brand: "", menu: "고추장삼겹살" },
      { brand: "", menu: "간장게장" },
      { brand: "", menu: "낙곱새" },
      { brand: "", menu: "물회" },
      { brand: "두찜", menu: "실비한우곱찜닭" },
      { brand: "두찜", menu: "로제닭발" },
    ],
  },
  기타: {
    emoji: "🌏", color: "#6A4C93", group: "식사",
    items: [
      { brand: "", menu: "마라탕" },
      { brand: "", menu: "마라샹궈" },
      { brand: "", menu: "꿔바로우" },
      { brand: "", menu: "초밥" },
      { brand: "", menu: "베트남음식" },
      { brand: "", menu: "타코야끼" },
      { brand: "", menu: "포케" },
      { brand: "", menu: "샐러드" },
      { brand: "", menu: "크림짬뽕" },
    ],
  },
  디저트: {
    emoji: "🍨", color: "#E07AB1", group: "디저트",
    items: [
      { brand: "요아정", menu: "요아정" },
      { brand: "설빙", menu: "두바이초코설빙" },
      { brand: "설빙", menu: "딸기마카롱설빙" },
      { brand: "설빙", menu: "ABC 초코 설빙" },
      { brand: "", menu: "크림푸딩" },
      { brand: "", menu: "갸또" },
      { brand: "", menu: "크로플" },
      { brand: "", menu: "파르페" },
      { brand: "카페인중독", menu: "햅쌀와플" },
      { brand: "카페인중독", menu: "로투스와플" },
      { brand: "와플대학", menu: "애플시나몬 와플" },
      { brand: "와플대학", menu: "초코범벅젤라또 와플" },
      { brand: "와플대학", menu: "딸기누텔라 와플" },
      { brand: "와플대학", menu: "블루베리범벅 와플" },
      { brand: "와플대학", menu: "오레오누텔라 와플" },
      { brand: "", menu: "수플레" },
      { brand: "", menu: "소금빵" },
      { brand: "", menu: "두바이 쫀득쿠키" },
    ],
  },
};

const allItems = Object.entries(menuData).flatMap(([cat, { items, color, emoji, group }]) =>
  items.map((item) => ({ ...item, category: cat, color, emoji, group }))
);

function getRandomItem(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}

function Confetti({ active }) {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    if (!active) { setParticles([]); return; }
    const colors = ["#FF6B35","#E63946","#F4A261","#2A9D8F","#6A4C93","#E07AB1","#FFD166"];
    const p = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 8,
      rotate: Math.random() * 360,
    }));
    setParticles(p);
    const t = setTimeout(() => setParticles([]), 1500);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 100 }}>
      {particles.map((p) => (
        <div key={p.id} style={{
          position: "absolute", left: `${p.x}%`, top: "-10px",
          width: p.size, height: p.size, background: p.color,
          borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          transform: `rotate(${p.rotate}deg)`,
          animation: `fall 1.4s ${p.delay}s ease-in forwards`,
        }} />
      ))}
      <style>{`@keyframes fall { 0%{transform:translateY(0) rotate(0deg);opacity:1} 100%{transform:translateY(100vh) rotate(720deg);opacity:0} }`}</style>
    </div>
  );
}

export default function App() {
  // "전체" | "식사" | "디저트"
  const [activeGroup, setActiveGroup] = useState("전체");
  // null = 그룹 전체, or specific category name
  const [selectedCat, setSelectedCat] = useState(null);
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [history, setHistory] = useState([]);

  const groups = ["전체", "식사", "디저트"];

  // Categories belonging to the active group
  const visibleCats = activeGroup === "전체"
    ? Object.keys(menuData)
    : Object.keys(menuData).filter((k) => menuData[k].group === activeGroup);

  // When group changes, reset category selection
  const handleGroupChange = (g) => {
    setActiveGroup(g);
    setSelectedCat(null);
    setResult(null);
  };

  const handleCatToggle = (cat) => {
    setSelectedCat((prev) => (prev === cat ? null : cat));
    setResult(null);
  };

  // Build pool
  const pool = (() => {
    if (selectedCat) return allItems.filter((i) => i.category === selectedCat);
    if (activeGroup === "전체") return allItems;
    return allItems.filter((i) => i.group === activeGroup);
  })();

  const pick = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    let count = 0;
    const interval = setInterval(() => {
      setResult(getRandomItem(pool));
      count++;
      if (count > 10) {
        clearInterval(interval);
        const final = getRandomItem(pool);
        setResult(final);
        setHistory((h) => [final, ...h].slice(0, 5));
        setSpinning(false);
        setConfetti(true);
        setTimeout(() => setConfetti(false), 100);
      }
    }, 80);
  };

  const accentColor = selectedCat
    ? menuData[selectedCat]?.color
    : activeGroup === "디저트" ? "#E07AB1"
    : activeGroup === "식사" ? "#FF6B35"
    : "#888";

  const groupColors = { "전체": "#888", "식사": "#FF6B35", "디저트": "#E07AB1" };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0F0F0F",
      color: "#F5F5F5",
      fontFamily: "'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', sans-serif",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "32px 16px 56px",
    }}>
      <Confetti active={confetti} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div style={{ fontSize: "12px", letterSpacing: "4px", color: "#666", marginBottom: "8px" }}>
          오늘 뭐 먹지?
        </div>
        <h1 style={{
          fontSize: "clamp(26px, 6vw, 40px)", fontWeight: 800, margin: 0, letterSpacing: "-1px",
          background: "linear-gradient(90deg, #FF6B35, #E07AB1)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          서나의 먹부림 룰렛
        </h1>
        <div style={{ marginTop: "6px", fontSize: "12px", color: "#555" }}>
          {pool.length}개 메뉴 중 하나를 골라드립니다
        </div>
      </div>

      {/* === GROUP TABS === */}
      <div style={{
        display: "flex", gap: "4px",
        background: "#1A1A1A", borderRadius: "14px", padding: "4px",
        marginBottom: "20px",
      }}>
        {groups.map((g) => {
          const active = g === activeGroup;
          const col = groupColors[g];
          return (
            <button key={g} onClick={() => handleGroupChange(g)} style={{
              padding: "9px 22px", borderRadius: "10px", border: "none",
              background: active ? col + "28" : "transparent",
              color: active ? col : "#555",
              fontWeight: active ? 800 : 500,
              fontSize: "14px", cursor: "pointer", transition: "all 0.18s",
              outline: active ? `1.5px solid ${col}55` : "none",
            }}>
              {g === "식사" ? "🍽️ 식사" : g === "디저트" ? "🍰 디저트" : "✨ 전체"}
            </button>
          );
        })}
      </div>

      {/* === CATEGORY CHIPS === */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "7px",
        justifyContent: "center", marginBottom: "28px", maxWidth: "560px",
      }}>
        {visibleCats.map((cat) => {
          const active = selectedCat === cat;
          const col = menuData[cat].color;
          return (
            <button key={cat} onClick={() => handleCatToggle(cat)} style={{
              padding: "6px 14px", borderRadius: "20px",
              border: `1.5px solid ${active ? col : "#2C2C2C"}`,
              background: active ? col + "22" : "transparent",
              color: active ? col : "#666",
              fontWeight: active ? 700 : 400,
              fontSize: "13px", cursor: "pointer", transition: "all 0.15s",
            }}>
              {menuData[cat].emoji} {cat}
            </button>
          );
        })}
      </div>

      {/* === RESULT CARD === */}
      <div style={{
        width: "100%", maxWidth: "400px",
        background: "#1A1A1A", borderRadius: "24px",
        border: "1px solid #2A2A2A",
        padding: "36px 28px", textAlign: "center",
        marginBottom: "20px", minHeight: "210px",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        {result && (
          <div style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(circle at 50% 50%, ${result.color}18 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />
        )}
        {!result && !spinning && (
          <div style={{ color: "#3A3A3A", fontSize: "15px", lineHeight: 1.8 }}>
            버튼을 눌러<br />오늘의 메뉴를 뽑아보세요
          </div>
        )}
        {(result || spinning) && (
          <div style={{ animation: spinning ? "shake 0.08s infinite" : "pop 0.3s ease-out" }}>
            <div style={{ fontSize: "52px", marginBottom: "10px" }}>{result?.emoji || "🎲"}</div>
            <div style={{ fontSize: "11px", letterSpacing: "2px", color: result?.color || "#888", marginBottom: "4px", fontWeight: 600 }}>
              {result?.group === "디저트" ? "🍰 디저트" : result?.group === "식사" ? "🍽️ 식사" : ""}
              {result?.category ? ` · ${result.category}` : ""}
            </div>
            {result?.brand && (
              <div style={{ fontSize: "13px", color: "#666", marginBottom: "4px" }}>{result.brand}</div>
            )}
            <div style={{ fontSize: "clamp(22px, 5vw, 30px)", fontWeight: 800, color: "#F5F5F5", letterSpacing: "-0.5px" }}>
              {result?.menu || "⌛"}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <button onClick={pick} disabled={spinning} style={{
        padding: "15px 48px", borderRadius: "50px", border: "none",
        background: spinning ? "#222" : `linear-gradient(135deg, ${accentColor}, #E07AB1)`,
        color: spinning ? "#444" : "#fff",
        fontSize: "16px", fontWeight: 800, letterSpacing: "0.5px",
        cursor: spinning ? "not-allowed" : "pointer", transition: "all 0.2s",
        boxShadow: spinning ? "none" : `0 4px 28px ${accentColor}44`,
        transform: spinning ? "scale(0.97)" : "scale(1)",
        marginBottom: "36px",
      }}>
        {spinning ? "뽑는 중..." : result ? "다시 뽑기 🎲" : "오늘의 메뉴 뽑기 🎲"}
      </button>

      {/* History */}
      {history.length > 0 && (
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <div style={{ fontSize: "11px", color: "#444", letterSpacing: "2px", marginBottom: "10px", textAlign: "center" }}>
            최근 뽑은 메뉴
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {history.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "10px 14px", background: "#141414",
                borderRadius: "12px", border: "1px solid #1F1F1F",
                opacity: 1 - i * 0.14,
              }}>
                <span style={{ fontSize: "18px" }}>{item.emoji}</span>
                <span style={{ flex: 1, fontSize: "13px", fontWeight: 600 }}>{item.menu}</span>
                {item.brand && <span style={{ fontSize: "11px", color: "#444" }}>{item.brand}</span>}
                <span style={{
                  fontSize: "10px", padding: "2px 8px", borderRadius: "10px",
                  background: item.color + "22", color: item.color, fontWeight: 700,
                }}>
                  {item.group === "디저트" ? "디저트" : item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-3px) rotate(-2deg)} 75%{transform:translateX(3px) rotate(2deg)} }
        @keyframes pop { 0%{transform:scale(0.8);opacity:0} 60%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
      `}</style>
    </div>
  );
}
