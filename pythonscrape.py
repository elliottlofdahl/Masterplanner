import json
import re
import time
from html import unescape
from urllib.request import urlopen

codes = [
    "TDDE18","TDDE56","TEIE72","TEIM11","TEIO19","TEIO90","TETS58","TFYA43",
    "TGTU91","TINT01","TKMJ38","TMES27","TMHP02","TMKA09","TMKM16","TMKT78",
    "TMKT80","TMME67","TMMV01","TSRT06","TSTE28","TAOP63","TATA71","TEAE09",
    "TEAE18","TEIG03","TETS27","TGTU49","TKMJ39","TMES45","TMES51","TMKO05",
    "TMME28","TMMV62","TMPR01","TSIU02","TSTE26","TDDE10","TDDE50","TEIE06",
    "TEIM09","TEIO13","TETS57","TGTU59","TGTU94","TINT02","TKMJ47","TMES41",
    "TMES53","TMHL22","TMKA10","TMKA13","TMKO01","TMMV08","TMQU31","TSFS04",
    "TSRT07","TDDD12","TEAE13","TEIO06","TEIO41","TETS36","TGTU84","TGTU95",
    "TKMJ50","TMES43","TMKO03","TMKO06","TMKT83","TMMV07","TMQU04","TRTE21",
    "TSFS03","TETS58","TKMJ31","TKMJ48","TKMJ56","TKMJ59","TMES52","TMMV12",
    "TMMV18","TMMV59","TMPE07","TMPM11","TMPR03","TSFS09","TSFS23","TSRT06",
    "TSTE28","TEIE42","TETS31","TMKA11","TMQU12","TQXX33"
]

url_tpl = "https://studieinfo.liu.se/kurs/{code}"
tag_re = re.compile(r"<[^>]+>")
result = {}

for i, code in enumerate(codes, 1):
    url = url_tpl.format(code=code)
    try:
        with urlopen(url, timeout=15) as f:
            html = f.read().decode("utf-8", errors="ignore")
        lower = html.lower()
        idx = lower.find("huvudomr")
        huv = None
        if idx != -1:
            snippet = html[idx: idx + 400]  # liten bit runt rubriken
            text = tag_re.sub(" ", snippet)
            text = unescape(text)
            text = " ".join(text.split())
            t_lower = text.lower()
            cut = t_lower.find("utbildningsniv")
            if cut != -1:
                huv = text[:cut].replace("Huvudområde", "").strip(" :-")
            else:
                parts = text.split()
                if len(parts) > 1:
                    huv = " ".join(parts[1:])
        result[code] = huv or "UNKNOWN"
        print(f"[{i}/{len(codes)}] {code}: {result[code]}", flush=True)
    except Exception as e:
        print(f"[{i}/{len(codes)}] {code} ERROR: {e}", flush=True)
        result[code] = "ERROR"
    time.sleep(0.25)  # lite paus för artighet

print(json.dumps(result, ensure_ascii=False, indent=2))
