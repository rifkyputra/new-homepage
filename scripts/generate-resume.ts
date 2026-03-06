#!/usr/bin/env tsx
import { readFileSync, writeFileSync, mkdtempSync, unlinkSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { execSync } from "child_process";

async function generatePDF(): Promise<void> {
  console.log("📄 Generating PDF from LaTeX...");

  try {
    const latexFilePath = join(process.cwd(), "static", "resume.tex");
    const latexContent = readFileSync(latexFilePath, "utf-8");

    // Create temporary directory
    const tempDir = mkdtempSync(join(tmpdir(), "latex-build-"));
    const tempTexFile = join(tempDir, "resume.tex");
    const tempPdfFile = join(tempDir, "resume.pdf");

    // Write LaTeX content to temp file
    writeFileSync(tempTexFile, latexContent);

    // Compile using pdflatex twice to ensure bookmarks and cross-references are correct
    const pdflatexPath = "/Library/TeX/texbin/pdflatex";
    const compile = () => {
      execSync(
        `${pdflatexPath} -interaction=nonstopmode -output-directory="${tempDir}" "${tempTexFile}"`,
        {
          cwd: tempDir,
          stdio: "inherit",
        },
      );
    };

    try {
      console.log("⏳ First pass...");
      compile();
      console.log("⏳ Second pass...");
      compile();
    } catch (execError) {
      console.error("❌ pdflatex compilation failed");
      throw execError;
    }

    // Copy generated PDF to static folder
    const pdfBuffer = readFileSync(tempPdfFile);
    const outputPath = join(process.cwd(), "static", "Rifky_Putra_Resume.pdf");
    writeFileSync(outputPath, pdfBuffer);

    const sizeKB = (pdfBuffer.length / 1024).toFixed(2);
    console.log(
      `✅ PDF generated successfully at static/Rifky_Putra_Resume.pdf (${sizeKB} KB)`,
    );

    // Cleanup
    try {
      unlinkSync(tempTexFile);
      unlinkSync(tempPdfFile);
      [".aux", ".log", ".out"].forEach((ext) => {
        try {
          unlinkSync(join(tempDir, "resume" + ext));
        } catch {}
      });
    } catch {}
  } catch (err) {
    const error = err as Error;
    console.error("❌ Error generating PDF:", error.message);
    console.error("Make sure LaTeX is installed:");
    console.error("  macOS: brew install basictex");
    console.error("  Ubuntu: sudo apt-get install texlive-latex-base");
    process.exit(1);
  }
}

generatePDF();
